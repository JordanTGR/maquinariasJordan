function saludar() {
    let nombre ;

    do {
        nombre = prompt("Cual es tu nombre");
    } while (!/^[a-zA-Z]+$/.test(nombre) || nombre === null || nombre.trim() === "");

    console.log(nombre);

    let apellido ;
    do {
        apellido = prompt("Cual es tu apellido");
    } while (!/^[a-zA-Z]+$/.test(apellido) || apellido === null || apellido.trim() === "");

    console.log(apellido);

    alert("Bienvenido " + nombre + " " + apellido);
}

function mayorDeEdad(intentos = 2) {
    let edad = prompt("Cual es tu edad");
    console.log(edad);
    if (edad >= 18) {
        alert("Genial, puedes alquilar la maquinaria que requieras.");
        document.body.style.backgroundColor = "light grey";
    }
    else if (intentos > 1) {
        alert("Tienes que ser mayor de edad, te quedan" + " " + (intentos - 1) + " " + "Intento.");
        mayorDeEdad(intentos - 1);
    }
    else {
        alert("No puedo brindarte el servicio, eres menor de edad");
        document.body.style.backgroundColor = "red";
        setTimeout(() =>
            window.location.href = "https://www.google.com", 1000);

    }
}
saludar();
mayorDeEdad();
