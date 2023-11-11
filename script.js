window.onload = function () {
  var consoleDiv = document.getElementById("console-ejericio1");
  logTitulo("Ejercicio 1");
  ejercicio1(consoleDiv);

  var consoleDiv = document.getElementById("console-ejericio2");
  logTitulo("Ejercicio 2");
  ejercicio2(consoleDiv);

  var consoleDiv = document.getElementById("console-ejericio3");
  logTitulo("Ejercicio 3");
  ejercicio3(consoleDiv);
};

function logTitulo(nombreEjercicio) {
  console.log(
    "%c" + nombreEjercicio,
    "color: tomato; -webkit-text-stroke: 1px black; font-size:30px; font-weight: 900"
  );
}
function ejercicio1(output) {
  var cantidadDeGatos = 10;
  for (let i = 1; i <= cantidadDeGatos; i++) {
    let renglon = `Gato #${i}: `;
    if (i % 3 === 0) {
      renglon += "😹";
    } else if (i % 3 === 1) {
      renglon += "😺";
    } else if (i % 3 === 2) {
      renglon += "😸";
    }
    output.innerHTML += renglon + "<br>";
    console.log(renglon);
  }
}

function ejercicio2(output) {
  var cantidadDeGatos = 5;
  var cantidadDePasos = 3;

  for (let i = 1; i <= cantidadDeGatos; i++) {
    let renglon = `Gato #${i}: 🐈 `;
    let pasos = "";
    for (let j = 1; j <= cantidadDePasos; j++) {
      pasos += "🐾";
    }
    renglon = renglon.concat(pasos);
    output.innerHTML += renglon + "<br>";
    console.log(renglon);
  }
}
/*
//Una mejor forma, sin usar "for" anidados
function ejercicio2(output) {
  var cantidadDeGatos = 5;
  var cantidadDePasos = 3;

  //Generar los pasos, que son iguales para todos los gatos
  let pasos = "";
  for (let j = 1; j <= cantidadDePasos; j++) {
    pasos += "🐾";
  }

  //Generar los gatos con los pasos
  for (let i = 1; i <= cantidadDeGatos; i++) {
    let renglon = `Gato #${i}: 🐈 `;
    renglon = renglon.concat(pasos);
    output.innerHTML += renglon + "<br>";
    console.log(renglon);
  }
}
*/

function ejercicio3(output) {
  var cantidadDeGatos = 10;
  var cantidadDePasos = 4;

  for (let i = 1; i <= cantidadDeGatos; i++) {
    let renglon = `Gato #${i}: `;
    renglon += i % 2 == 0 ? "🐈‍⬛" : "🐈";
    let pasos = " ";
    for (let j = 1; j <= cantidadDePasos; j++) {
      pasos += "🐾";
    }
    renglon = renglon.concat(pasos);
    output.innerHTML += renglon + "<br>";
    console.log(renglon);
  }
}
