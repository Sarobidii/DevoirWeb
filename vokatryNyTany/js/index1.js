
const titreSection3 = document.querySelectorAll('.titre-section3'); 
for(let i=0;i<titreSection3.length;i++) {
  titreSection3[i].addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien

    const targetId = event.target.id;

    if (targetId === 'lien1') {
        localStorage.setItem("productType", "./data/Fruits.json");
        localStorage.setItem("paths", "/FRUITS");
    } else if (targetId === 'lien2') {
        localStorage.setItem("productType", "./data/Légumes.json");
        localStorage.setItem("paths", "/LEGUMES");
    } else if(targetId === 'lien3') {
        localStorage.setItem("productType", "./data/Grains.json");
        localStorage.setItem("paths", "/GRAINS");
    } else if(targetId === 'lien4') {
        localStorage.setItem("productType", "./data/Epices.json");
        localStorage.setItem("paths", "/EPICES");
    }
    window.location.href = "./produits.html";
  });
}
const nav = document.querySelectorAll('.nav'); 
for(let i=0;i<nav.length;i++) {
  nav[i].addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien

    const targetId = event.target.id;

    if (targetId === 'lien1') {
        localStorage.setItem("productType", "./data/Fruits.json");
        localStorage.setItem("paths", "/FRUITS");
    } else if (targetId === 'lien2') {
        localStorage.setItem("productType", "./data/Légumes.json");
        localStorage.setItem("paths", "/LEGUMES");
    } else if(targetId === 'lien3') {
        localStorage.setItem("productType", "./data/Grains.json");
        localStorage.setItem("paths", "/GRAINS");
    } else if(targetId === 'lien4') {
        localStorage.setItem("productType", "./data/Epices.json");
        localStorage.setItem("paths", "/EPICES");
    }
    window.location.href = "./produits.html";
  });
}

const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("custom-slider");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}


