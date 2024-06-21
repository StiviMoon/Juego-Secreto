let intentos = 1;
let numerosSorteados = [];
let numeroSecreto; // Declarar numeroSecreto en el ámbito global
const max = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `¡Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}!`
    );

    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número es menor");
    } else {
      asignarTextoElemento("p", "El número es mayor");
    }
  }
  intentos++;
  limpiarCaja();
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function genNumRamdom(max) {
  let numeroGenerado = Math.floor(Math.random() * max + 1);

  if (numerosSorteados.length === max) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
  } else {
    if (numerosSorteados.includes(numeroGenerado)) {
      return genNumRamdom(max);
    } else {
      numerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales(max) {
  numerosSorteados = [];
  numeroSecreto = genNumRamdom(max);
  asignarTextoElemento("h1", "¡Juego del número Secreto!");
  asignarTextoElemento("p", `Indica tu número entre 1 y ${max}`);
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales(max);
  document.getElementById("reiniciar").setAttribute("disabled", "true");
  intentos = 1;
}

condicionesIniciales(max);
