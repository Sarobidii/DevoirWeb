let exempleproducts = document.querySelector(".listes_fruits");
const jsonFiles = "Fruits.json";
const reponse = await fetch(jsonFiles);
const products = await reponse.json();

for (let i = 0; i < products.length; i++) {
  const product = products[i];

  const responsive = document.createElement("div");
  responsive.className = "responsive";
  exempleproducts.appendChild(responsive);
  const gallery = document.createElement("div");
  gallery.className = "gallery";
  responsive.appendChild(gallery);

  const lien = document.createElement("a");
  lien.target = "_blank";
  lien.href = product.images;
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
clearfix.className("clearfix");
exempleproducts.appendChild(clearfix); 
