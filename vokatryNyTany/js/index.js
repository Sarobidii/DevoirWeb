const jsonFile = "../data/all.json";
const reponse = await fetch(jsonFile);
const produits = await reponse.json();
let products = [];

const searchItem = document.querySelector(".recherche");

searchItem.addEventListener("input", e => {
    const element = e.target.value.toLowerCase();
    products = []; // Réinitialiser le tableau des produits correspondants

    let i = 0;
    while (i < produits.length) {
        const productName = produits[i].name.toLowerCase();
        const words = productName.split(" ");
        let found = false;

        // Vérifier si l'élément de recherche est contenu dans le nom du produit ou dans n'importe quel mot du nom
        if (productName.includes(element)) {
            found = true;
        } else {
            for (let j = 0; j < words.length; j++) {
                if (words[j].includes(element)) {
                    found = true;
                    break; // Arrêter la boucle `for` dès qu'une correspondance est trouvée
                }
            }
        }

        if (found) {
            products.push(produits[i]);
            const exempleproducts = document.querySelector(".listes_legumes");
      exempleproducts.innerHTML = ''; 
        }
        
        i++; // Incrémenter `i` pour éviter la boucle infinie
    }

    // Pour voir les produits trouvés dans la console
    for(let j=0;j<products.length;j++){
      affichesss(products[j], j);
    }

    // Mettre à jour l'affichage ou faire quelque chose avec les produits trouvés
    // updateDisplay(products); // Vous pouvez créer une fonction pour mettre à jour l'affichage avec les résultats.
});


  function affichesss(product, i) {
    const exempleproducts = document.querySelector(".listes_legumes");
      const responsive = document.createElement("div");
          responsive.className = "responsive";
          responsive.id = i
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

          const productOnly = document.querySelectorAll('.responsive');
      productOnly.forEach(elementss => {
        elementss.addEventListener("click", function(){
          const ids = parseInt(this.id);
          exempleproducts.innerHTML = `
          <div class="infoOnly">
            <div class="imageOnly">
              <div class="imageOnlyContent">
                <img src="${produits[ids].images}" alt="${produits[ids].name}">
              </div>
            </div>
            <div class="descriptionImage">
            <div class="descriptionContent">
              <div class="nameImage">${produits[ids].name}</div>
              <div class="priceImage">${produits[ids].price}</div>
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
            pannierImage.addEventListener('click', function(){
              nombre++;
              const stickyPannier = document.querySelector('.chiffre');
            stickyPannier.textContent = nombre;
            const compteurPannier = document.querySelector('.compteur');
            compteurPannier.textContent = nombre;
            const quantiteContent = document.querySelector(".quantite > input");
            const quantiteChoisi = parseInt(quantiteContent.value);
            const prix = parseFloat(produits[ids].price.split(" ")[0]);
            const total = prix*quantiteChoisi;
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
                    <img width="200px" src="${produits[ids].images}" alt="${produits[ids].name}">
                  </div>
                  <div class="infoDescr">
                    <p>Nom du produits : ${produits[ids].name}</p>
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
            /*affiche.style.display = "flex";
            affiche.style.color = "white";
            affiche.style.flexDirection = "column";
            affiche.style.justifyContent = "center";
            affiche.style.alignItems = "center";
            affiche.style.width = "100%"; */
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
            contenuPannier.style.width = "1000px"
           /*  affiche.style.top = "50%"; */
            document.querySelectorAll(".material-symbols-outlined")[0].style.fontSize = "35px"
            document.querySelectorAll(".material-symbols-outlined")[1].style.fontSize = "35px"
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
            quitter.addEventListener('click', function(){
              affiche.style.display = "none";
              quitter.href = "produits.html";
            })
            })
        })
      })
  }