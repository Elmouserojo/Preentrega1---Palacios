// Menú de comida como array
const menu = [
  { nombre: "Pizza", precio: 5000 },
  { nombre: "Hamburguesa", precio: 5500 },
  { nombre: "Papafritas", precio: 3500 },
  { nombre: "Ensalada", precio: 1800 },
  { nombre: "Cerveza", precio: 3000 },
];

// Función para mostrar el menú
function mostrarMenu() {
  let menuTexto = "Menú disponible:\n";
  menu.forEach((item, index) => {
    menuTexto += `${index + 1}. ${item.nombre} - $${item.precio}\n`;
  });
  return menuTexto;
}

// Simulador del pedidos
function simuladorMenu() {
  alert("¡Bienvenido al simulador de pedidos.");

  let seguir = true;
    while (seguir) {
    const menuTexto = mostrarMenu();
    const eleccion = prompt(
      menuTexto + "\nElegí un número del menú (del 1 al " + (menu.length) + "):"
    );

    const indice = parseInt(eleccion) - 1;
    if (indice >= 0 && indice < menu.length) {
      const producto = menu[indice];
      alert(`Elegiste: ${producto.nombre}.\nPrecio: $${producto.precio}.`);
    } else if(indice === menu.length) {
        alert("Gracias por usar mi simulador!");
        seguir = false;
    } else {
        alert("Opción no válida. Por favor volvé a intentar."); //sólo funciona si se ingresan letras,
                                                                //ingresar un número mayor a 5 cierra el ciclo.
                                                                //AVERIGUAR
    }
  }

  console.log("Gracias por usar mi simulador!");
}

// Iniciar el simulador
simuladorMenu();
