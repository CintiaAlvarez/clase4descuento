let dato = document.getElementById("dato");
let rotulo = document.getElementById("rotulo");
let btnEnv = document.getElementById("BtnEnviar");

rotulo.innerHTML = "Ingrese costo del producto";

let precio: number = 450.5;
let descuento: number = 45.05;

btnEnviar.addEventListener("click", () => {
  let numeroingresado: number = Number(dato.value);

  if (numeroingresado === precio) {
    console.log("El precio final es", precio - descuento);
  }
});
