function saludar() {
    let nombre = "";
    while (!/^[a-zA-Z]+$/.test(nombre) || nombre === null || nombre.trim() === "") {
        nombre = prompt("¿Cuál es tu nombre?");
    }
    console.log(nombre);

    let apellido = "";
    while (!/^[a-zA-Z]+$/.test(apellido) || apellido === null || apellido.trim() === "") {
        apellido = prompt("¿Cuál es tu apellido?");
    }
    console.log(apellido);

    alert("Bienvenido " + nombre + " " + apellido);
}

function mayorDeEdad(intentos = 2) {
    let edad;

    while (true) {
        edad = prompt("¿Cuál es tu edad? ");

        if (/^\d{1,2}$/.test(edad)) {
            edad = parseInt(edad, 10);
            break;
        } else {
            alert("Por favor, ingresa un número válido de hasta 2 dígitos.");
        }
    }

    console.log(edad);

    if (edad >= 18) {
        alert("Genial, puedes alquilar la maquinaria que requieras.");
        document.body.style.backgroundColor = "light grey";
    } else if (intentos > 1) {
        alert("Tienes que ser mayor de edad, te quedan " + (intentos - 1) + " intentos.");
        mayorDeEdad(intentos - 1);
    } else {
        alert("No puedo brindarte el servicio, eres menor de edad.");
        document.body.style.backgroundColor = "red";
        setTimeout(() => window.location.href = "https://www.google.com", 1000);
    }
}
function maquinariasImagen() {
    let cantidad =prompt ("¿Cuantas maquinarias quieres?")
    cantidad = parseInt(cantidad);
    if (cantidad > 10) {
        alert("si quieres mas maquinas tendras que buscar en los productos");
        return;
    }
    for (let i = 0; i < cantidad; i++) {
        document.write( (i+1)+
            `<img src="https://assets.cnhindustrial.com/casece/latam/assets/Products/Backhoe-Loaders/580N%20S2/hotspot/hotspot.jpg" style = "width: 360px; margin: 10px">`
        )
    }
    console.log(maquinariasImagen)
}
saludar();
mayorDeEdad();
maquinariasImagen();