const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = inputRojo.value;
textoVerde.innerText = inputVerde.value;
textoAzul.innerText = inputAzul.value;

function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

inputRojo.addEventListener("change", (e) => {
  /*e=donde ocurrio el evento
          target= es el elemento que acciono el elemento
          value= valor que tiene el elemento*/
  rojo = e.target.value;
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul);
});

inputVerde.addEventListener("change", (e) => {
  /*e=donde ocurrio el evento
            target= es el elemento que acciono el elemento
            value= valor que tiene el elemento*/
  verde = e.target.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo, verde, azul);
});

inputAzul.addEventListener("change", (e) => {
  /*e=donde ocurrio el evento
            target= es el elemento que acciono el elemento
            value= valor que tiene el elemento*/
  azul = e.target.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
});
