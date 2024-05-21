import { servicesProducts } from "../services/product-services.js"

const productContainer = document.querySelector("[data-product]")
const form = document.querySelector("[data-form]")
// var eraser = []

function createCard(name, price, image, id) {
  const card = document.createElement("div")
  card.classList.add("card")

  card.innerHTML = `
          <div class="img-container">
            <img src="${image}" alt="${name}">
          </div>

          <div class="card-container--info">
            <p>${name}</p>
            <div class="card-container--value">
              <p>$ ${price}</p>
              <button class="delete-button" data-id="${id}" onclick="deleteProduct('${id}')">
                <img src="./assets/trashIcon.svg" alt="Eliminar">
              </button>
            </div>
          </div>
          `
  productContainer.appendChild(card)
  return card
}

const eraser = document.querySelectorAll("[data-id]")
eraser.forEach(btn => {
  const id = btn.getAttribute("id")
  console.log("id del botón:", id)
  btn.addEventListener('click', () => deleteProduct())
})

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
async function deleteCard(id) {
  await deleteProduct(id);
  window.location.href = "../index.html";
}

window.addEventListener('load', function () {
  const btnDelete = document.querySelectorAll("[data-delete]");
  const html = document.documentElement.outerHTML;

  btnDelete.forEach(btn => {
    const id = btn.getAttribute("id");
    console.log("id del boton " + id);
    btn.addEventListener('click', () => deleteCard(id));
  });
});
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const render = async () => {
  try {
    const listProducts = await servicesProducts.productList()
    
    listProducts.forEach(product => {
      productContainer.appendChild(
        createCard(product.name, product.price, product.image, product.id)
      );
    });
  } catch (error) {
    // console.log("revisar aca");
    console.log(error);
  } 
  // finally {
    // eraser = document.querySelectorAll("[data-id]")
    // eraser = document.getElementsByClassName("delete-button")
    // console.log(eraser);
    // eraser.data.addEventListener("click", (event) => {
    //   event.preventDefault()
    //   servicesProducts.deleteProduct(id)
    // })
  // }
}

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const name = document.querySelector("[data-name]").value
  const price = document.querySelector("[data-price]").value
  const image = document.querySelector("[data-image]").value

  servicesProducts.createProduct(name, price, image).then(res => console.log(res)).catch(err => console.log(err));
})


render()
