/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Definir la función barajar
  function barajar() {
    const numeros = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const cartas = ["corazon", "rombo", "espada", "trebol"];

    let numerosAzar = Math.floor(Math.random() * numeros.length);
    let numerosFin = numeros[numerosAzar];

    let cartasAzar = Math.floor(Math.random() * cartas.length);
    let cartasFin = cartas[cartasAzar];

    let fig01 = document.getElementById("figura01");
    let numerox = document.getElementById("numero");
    let fig02 = document.getElementById("figura02");

    switch (cartasFin) {
      case "corazon":
      case "rombo":
        fig01.style.color = "red";
        numerox.style.color = "red";
        fig02.style.color = "red";
        break;
      case "espada":
      case "trebol":
        fig01.style.color = "black";
        numerox.style.color = "black";
        fig02.style.color = "black";
        break;
    }

    if (cartasFin === "corazon") {
      fig01.innerHTML = "♥";
      fig02.innerHTML = "♥";
    } else if (cartasFin === "rombo") {
      fig01.innerHTML = "♦";
      fig02.innerHTML = "♦";
    } else if (cartasFin === "espada") {
      fig01.innerHTML = "♠";
      fig02.innerHTML = "♠";
    } else {
      fig01.innerHTML = "♣";
      fig02.innerHTML = "♣";
    }

    numerox.innerHTML = numerosFin;
  }

  barajar();

  document.querySelector(".boton").addEventListener("click", barajar);

  console.log("Hello Rigo from the console!");
};
