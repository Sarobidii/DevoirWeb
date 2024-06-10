async function initializeSlider() {
  const jsonFile = ["../data/products1.json","../data/products.json"];

  try {
    // Fetching the JSON data
    for(let j = 0;j < 2; j++){
      const response = await fetch(jsonFile[j]);
    const produits = await response.json();
    const mostPopPorducts = document.querySelectorAll(".serieCustom")[j]
    for (let i = 0; i < produits.length; i++) {
      const product = produits[i];
  
      const productCard = document.createElement("a");
      productCard.className = "product-card";
      productCard.id = i;
      mostPopPorducts.appendChild(productCard);
  
      const divImage = document.createElement("div");
      divImage.className = "product-card__image";
      productCard.appendChild(divImage);
  
      const productCardImage = document.createElement("img");
      productCardImage.src = product.images;
      productCardImage.alt = product.name;
      divImage.appendChild(productCardImage);
  
      const divDescription = document.createElement("div");
      divDescription.className = "product-card__description";
      productCard.appendChild(divDescription);
  
      const divName = document.createElement("div");
      divName.className = "product-card__text";
      divName.textContent = product.name;
      divDescription.appendChild(divName);
  
      const divPrice = document.createElement("div");
      divPrice.className = "product-card__price";
      divPrice.textContent = product.price;
      divDescription.appendChild(divPrice);
  
      const divStars = document.createElement("div");
      divStars.className = "product-card__stars";
      productCard.appendChild(divStars);
  
      const spanStars = document.createElement("span");
      divStars.appendChild(spanStars);
  
      for (let j = 0; j < 5; j++) {
        let content = document.createElement("span");
        content.className = "material-symbols-outlined";
        content.id = `star-${j + 1}`; 
        content.textContent = "kid_star";
        spanStars.appendChild(content);
      }
  } 
    }
    // Initialize the slider after fetching data
    var slideIndex = 1;
    showSlides1(slideIndex);

    function plusSeries(n) {
      showSlides1(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides1(slideIndex = n);
    }

    function showSlides1(n) {
      var i;
      var slides = document.getElementsByClassName("slideco");
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
    }

    const productOnly = document.querySelectorAll('.product-card');
      productOnly.forEach(elementss => {
        elementss.addEventListener('click', function(){
          const ids = parseInt(this.id);
          this.href = "produits.html"
        })
      })

    // Attach the plusSeries function to the window so it can be accessed by onclick attributes
    window.plusSeries = plusSeries;
    window.currentSlide = currentSlide;

  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Call the function to initialize the slider
initializeSlider();
