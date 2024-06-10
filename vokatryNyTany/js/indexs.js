document.addEventListener('DOMContentLoaded', async () => {
  const productType = localStorage.getItem("productType");
  let nombre = localStorage.getItem('nombres') ? parseInt(localStorage.getItem('nombres')) : 0; // Récupère le nombre du localStorage ou 0 si non défini
  
  if (productType) {
    const path = document.createElement("div")
    path.textContent = localStorage.getItem("paths");
    document.querySelector(".path").appendChild(path)
    const exempleproducts = document.querySelector(".listes_legumes");
    exempleproducts.innerHTML = ''; // Vide le conteneur avant d'ajouter de nouveaux éléments

    const reponse = await fetch(productType);
    const products = await reponse.json();

    for (let i = 0; i < products.length; i++) {
      const product = products[i];

      const responsive = document.createElement("div");
      responsive.className = "responsive";
      responsive.id = i;
      exempleproducts.appendChild(responsive);

      const gallery = document.createElement("div");
      gallery.className = "gallery";
      responsive.appendChild(gallery);

      const lien = document.createElement("div");
      lien.className = "imagess";
      gallery.appendChild(lien);

      const img = document.createElement("img");
      img.src = product.images;
      img.alt = product.name;
      lien.appendChild(img);

      const desc = document.createElement("div");
      desc.className = "desc";
      desc.textContent = product.name;
      gallery.appendChild(desc);

      const price = document.createElement("div");
      price.className = "price";
      price.textContent = product.price;
      gallery.appendChild(price);
    }

    const clearfix = document.createElement("div");
    clearfix.className = "clearfix";
    exempleproducts.appendChild(clearfix);

    const productOnly = document.querySelectorAll('.responsive');
    productOnly.forEach(elementss => {
      elementss.addEventListener('click', function() {
        const ids = parseInt(this.id);
        const path1 = document.createElement("div")
        path1.textContent = "/"+products[ids].name;
        document.querySelector(".path").appendChild(path1)
        localStorage.setItem('ids', ids);
        exempleproducts.innerHTML = `
          <div class="infoOnly">
            <div class="imageOnly">
              <div class="imageOnlyContent">
                <img src="${products[ids].images}" alt="${products[ids].name}">
              </div>
            </div>
            <div class="descriptionImage">
            <div class="descriptionContent">
              <div class="nameImage">${products[ids].name}</div>
              <div class="priceImage">${products[ids].price}</div>
            </div>
            <div class="nameImage">
              <div class="quantite">
                <label for="number">Quantité : </label>
                <input type="number" name="nombre">  
                <label> kg</label>
              </div>
            </div>
              <div class="pannierImage">
                <div>Ajouter au pannier</div>
              </div>
              <div class="block-contents">
                <span class="material-symbols-outlined">info</span>
                Service client au : 
                <a href="tel:0649549419">06 49 54 94 19</a>
              </div>
              <div class="block-contents">
                <span class="material-symbols-outlined">package_2</span>
                Livraison Mondial Relay offerte à partir de 100€
              </div>
              <div class="block-contents">
                <span class="material-symbols-outlined">web_traffic</span>
                Click & Collect - La Grande Motte
              </div>
              </div> 
            </div>
          `;

        const pannierImage = document.querySelector(".pannierImage > div");
        pannierImage.addEventListener('click', function() {
          nombre++;
          localStorage.setItem('nombres', nombre); // Stocker le nombre dans le localStorage
          const stickyPannier = document.querySelector('.chiffre');
          stickyPannier.textContent = nombre;
          const compteurPannier = document.querySelector('.compteur');
          compteurPannier.textContent = nombre;
          const quantiteContent = document.querySelector(".quantite > input");
          const quantiteChoisi = parseInt(quantiteContent.value);
          localStorage.setItem('quantiteChoisi', quantiteChoisi); // Stocker la quantité choisie dans le localStorage
          const prix = parseFloat(products[ids].price.split(" ")[0]);
          localStorage.setItem("prix",prix)
          const total = prix * quantiteChoisi;
          const affiche = document.querySelector(".affiche");
          affiche.innerHTML = `
            <div class="contenuPannier">
              <div class="confirmation">
                <div class="yes"><span class="material-symbols-outlined">check</span>Le produit a bien été ajouté dans votre pannier</div>
                <a class="quitter"><span class="material-symbols-outlined">close</span></a>
              </div>
              <div class="infoConfirmation">
                <div class="partie1">
                  <div class="infoImage">
                    <img width="200px" src="${products[ids].images}" alt="${products[ids].name}">
                  </div>
                  <div class="infoDescr">
                    <p>Nom du produits : ${products[ids].name}</p>
                    <br>
                    <p>Prix : ${prix} MGA</p>
                    <br>
                    <p>Quantité du produits : ${quantiteChoisi}</p>
                  </div>
                </div>
                <div class="partie2">
                  <p>Il y a ${nombre} produit dans votre pannier.</p>
                  <br>
                  <p>Total : ${total} MGA</p>
                  <br>
                  <div class="commanderOuAcheter">
                    <div class="acheter">Continuer vos achats</div>
                    <div class="commander">Continuer vos achats</div>
                  </div>
                </div>
              </div>
            </div>
          `;
          const quitter = document.querySelector(".quitter");
          
          quitter.addEventListener('click', function() {
            affiche.style.display = "none";
            quitter.href = "produits.html";
          });
        });
      });
    });
  }
});
