// Nuestro array de productos

let productos = [
  {
    name: "TV",
    price: 400,
    stock: 10,
  },
  {
    name: "Iphone 14",
    price: 900,
    stock: 0,
  },
  {
    name: "PlayStation 5",
    price: 700,
    stock: 30,
  },
  {
    name: "Xbox One",
    price: 650,
    stock: 67,
  },
  {
    name: "Tablet",
    price: 200,
    stock: 0,
  },
];

// Cómo me quedo solamente con los nombres de los productos?

// Map con función flecha
let soloNombres = productos.map((producto) => producto.name);

console.log(soloNombres);

// Productos que tengan stock, es decir stock mayor a 1

// Filter con function
let conStock = productos.filter(function (producto) {
  return producto.stock > 1;
});

console.log(conStock);

// Productos baratos

let productosBaratos = productos.filter((producto) => producto.price <= 400);

console.log(productosBaratos);

// Agregando una propiedad extra a cada producto, y usando un ternario para definir si es favorito o no en base a su precio

let favoritos = productos.map((producto) => {
  return {
    name: producto.name,
    price: producto.price,
    stock: producto.stock,
    favorito: producto.price > 400 ? true : false,
  };
});

console.log(favoritos);
