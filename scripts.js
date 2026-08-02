//function decalarations
function getCurrYear() {
  const date = new Date().getFullYear();
  document.getElementById("current-year").textContent = date;
  return true;
}

//grab the product card HTML elements and populate with teh product data from products.js
function renderProducts() {
  let grid = document.querySelector(".product-grid"); //parent element of the product cards
  let cards = Array.from(document.querySelectorAll(".product-card")); //grab all existing product cards (cast to array instead of keeping as a nodelist)
  const templateCard = cards[0]; //grab the first card as a template in case we have more products than cards

  //products var is defined in products.js, which is loaded before this script in index.html
  products.forEach((product, index) => {
    let card = cards[index];

    //if we need more cards, clone the template card and append it at the end of the grid
    if (!card) {
      card = templateCard.cloneNode(true);
      grid.appendChild(card);
      cards.push(card); //needs to be an array
    }

    console.log(`Rendering product: ${product.name} at index ${index}`);

    //reach into the card and populate the data from the product object
    card.querySelector(".product-link").href = product.shopifyUrl;
    card.querySelector(".product-link").textContent = "Order " + product.name;

    const cardImg = card.querySelector(".product-image > img");
    cardImg.src = product.image;
    cardImg.alt = `Image of ${product.name}`;

    card.querySelector(".product-name").textContent = product.name;
    card.querySelector(".product-category").textContent = product.category;
    card.querySelector(".product-price").textContent = product.price;
    card.querySelector(".product-description").textContent =
      product.description;
  });
}

//function calls
getCurrYear();

renderProducts();
