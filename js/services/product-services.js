const BASE_URL = "http://localhost:3000/products";

const productList = () => {
  return fetch(`${BASE_URL}`)
    .then(res => res.json())
    .catch(err => console.log(err))
}

// const productList = async () => {
//   try {
//     const res = await fetch(`${BASE_URL}`)  
//     return await res.json()
//   } catch (err) {
//     return console.log(err)  
//   }
// }

const createProduct = (name, price, image) => {
  return fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, price, image })
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

const deleteProduct = (id) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
    // body: JSON.stringify({name, price, image})
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}
// const deleteProduct = async (id) => {
//   try {
//     const conexion = await fetch(`${BASE_URL}/${id}`, {
//       method: "DELETE",
//       headers: { "Content-type": "application/json" },
//     });

//     const conexionConvertida = conexion.json();

//     return conexionConvertida;

//   } catch (error) {
//     console.error(`Error al eliminar el producto: ${id}`);
//   }
// }

export const servicesProducts = {
  productList, createProduct, deleteProduct
}


