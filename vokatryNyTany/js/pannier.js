document.querySelector(".compteur").textContent = localStorage.getItem("nombres")
document.querySelector(".chiffre").textContent = localStorage.getItem("nombres")
const ids = localStorage.getItem("ids")
const productType = localStorage.getItem("productType");
const reponse = await fetch(productType);
const products = await reponse.json();
console.log(products[ids])
const quantiteChoisi = localStorage.getItem('quantiteChoisi');
const prix = localStorage.getItem('prix');
const newProduit = document.createElement("div");
newProduit.className = "newProduit"
document.querySelector('.contenuPannier').appendChild(newProduit)
newProduit.innerHTML += 
`
    <div class="infoImage">
        <img width="100px" src="${products[ids].images}" alt="${products[ids].name}">
    </div>
    <div class="infoDescr">
        <p>Nom du produits : ${products[ids].name}</p>
        <br>
        <p>Prix unitaire: ${prix} MGA</p>
        <br>
        <div class="quantite">
          <label for="number">Quantité : </label>
          <input type="number" value="${quantiteChoisi}" name="nombre">  
          <label> kg</label>
        </div>
    </div>
    <div class="clear">
        <span id="delete" class="material-symbols-outlined">delete</span>
    </div>
`; 
document.querySelector(".clear").style.cursor = "pointer"
document.querySelector("#delete").style.fontSize = "50px"
newProduit.style.display = "flex"
newProduit.style.alignItems = "center"
newProduit.style.gap = "15px"
document.querySelector(".quantite > input").style.width = "50px"
document.querySelector(".clear").addEventListener('click', function(){
    newProduit.innerHTML = ""
})

