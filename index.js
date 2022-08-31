function saludar() {
    alert(" Hola " + nombre + ", Biemvenido a Tu Cine.com    ")
}

function alquilarPelicula() {
    pelicula = prompt(" Elije una película \n 1: Avengers  \n 2: Iron Man  \n 3: Guardianes de la Galaxia  \n 4: Hulk")

    // iba a poner un switch pero me daba error al poner un alert
    if (pelicula === "1") {
        alert(" Avengers ");

    } else if (pelicula === "2") {
        alert(" Iron Man ");

    } else if (pelicula === "3") {
        alert(" Guardianes de la galaxia ");

    } else if (pelicula === "4") {
        alert(" Hulk ");
    }
    opcion = prompt(" Ingrese una opción :  \n 2: precio final   \n 3: salir de la platafora ")

}


function finalizarAlquiler() {

    if (pelicula === "1") {
        alert("Elegiste Avengers, el precio del alquiler mas IVA  es " + avengers * iva + " pesos ")

    }
    else if (pelicula === "2") {
        alert(" elegiste Iron Man, el precio del alquiler mas IVA  es " + ironMan * iva + " pesos ")

    }
    else if (pelicula === "3") {
        alert(" Elegiste Guardianes de la Galaxia, el precio el alquiles mas IVA es " + guardianes * iva + " pesos ")

    }
    else if (pelicula === "4") {
        alert(" Elegiste Hulk, el precio del alquiles mas IVA  es " + hulk * iva + " pesos ")

    }
}

// variables 

let nombre = prompt(" ingrese su nombre ")
let pelicula
let avengers = 600
let ironman = 700
let guardianes = 650
let hulk = 535
let iva = 1.21


saludar();
let opcion = prompt(" Ingrese una opción :  \n 1: Alquilar Película  \n 2: Finalizar Alquiler  \n 3: Salir de la plataforma ")

while (opcion !== "3") {
    if (opcion === "1") {
        alquilarPelicula();

    }

    if (opcion === "2") {
        finalizarAlquiler();
        opcion = "3";
    }

}
alert(" Gracias por usar nuestra Plataforma");

