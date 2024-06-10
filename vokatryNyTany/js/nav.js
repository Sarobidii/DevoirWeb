const titreSection3 = document.querySelectorAll('.item'); 
for(let i=0;i<titreSection3.length;i++) {
  titreSection3[i].addEventListener('click', function() {
    titreSection3[i].preventDefault(); // Empêche le comportement par défaut du lien
console.log(thi)
    if (targetId === 'link1') {
        localStorage.setItem("productType", "./data/Fruits.json");
    } else if (targetId === 'link2') {
        localStorage.setItem("productType", "./data/Légumes.json");
    } else if(targetId === 'link3') {
        localStorage.setItem("productType", "./data/Grains.json");
    } else if(targetId === 'link4') {
        localStorage.setItem("productType", "./data/Epices.json");
    }
    /* window.location.href = "./produits.html"; */
  });
}

document.addEventListener('DOMContentLoaded', async () => {
    const productType = localStorage.getItem("productType");
    /* let nombre = localStorage.getItem('nombres') ? parseInt(localStorage.getItem('nombres')) : 0; // Récupère le nombre du localStorage ou 0 si non défini
    
    if (productType) {
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
            const confirmation = document.querySelector(".confirmation");
            confirmation.style.backgroundColor = "#3D4E00";
            confirmation.style.paddingRight = "25px";
            confirmation.style.paddingLeft = "25px";
            confirmation.style.paddingTop = "5px";
            confirmation.style.paddingBottom = "5px";
            confirmation.style.display = "flex";
            confirmation.style.justifyContent = "space-between";
            confirmation.style.alignItems = "center";
            const infoConfirmation = document.querySelector(".infoConfirmation");
            infoConfirmation.style.backgroundColor = "#8c9e4c";
            infoConfirmation.style.paddingRight = "25px";
            infoConfirmation.style.paddingLeft = "25px";
            infoConfirmation.style.paddingTop = "25px";
            infoConfirmation.style.paddingBottom = "25px";
            infoConfirmation.style.display = "flex";
            infoConfirmation.style.flexDirection = "row";
            infoConfirmation.style.justifyContent = "space-around";
            const contenuPannier = document.querySelector(".contenuPannier");
            contenuPannier.style.width = "1000px";
            document.querySelectorAll(".material-symbols-outlined")[0].style.fontSize = "35px";
            document.querySelectorAll(".material-symbols-outlined")[1].style.fontSize = "35px";
            document.querySelector(".yes").style.display = "flex";
            document.querySelector(".yes").style.alignItems = "center";
            document.querySelector(".yes").style.justifyContent = "center";
            document.querySelector(".yes").style.gap = "10px";
            const quitter = document.querySelector(".quitter");
            quitter.style.cursor = "pointer";
            const partie1 = document.querySelector('.partie1');
            partie1.style.display = "flex";
            partie1.style.flexDirection = "row";
            partie1.style.gap = "25px";
            quitter.addEventListener('click', function() {
              affiche.style.display = "none";
              quitter.href = "produits.html";
            });
          });
        });
      });
    } */
  }); 
