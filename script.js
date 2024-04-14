function capitalizedSentece() {
    let newSentece = document.getElementById("sentence").value; //toma el dato ingresado por el usuario
    let capitalizingSentece = newSentece.split(""); // transforma el string en array, cada palabra es un elemento con su indice
    if (capitalizingSentece != "") { // si capitalizingSentece no es igual a un string vacio ejecuta el ciclo for
        for (let i = 0; i < capitalizingSentece.length; i++) { // se inicializa i en 0 para acceder a los indices en el array, se ejecuta mientras i que es 0 sea menor que la cantidad de elementos que hay en el array
            //si la condicion es correcta itinera en cada elemento avanzando
            capitalizingSentece[i] = capitalizingSentece[i].charAt(0).toUpperCase(); // al poner la variable[i] se accede a cada indice que va aumentando en 1 hacia el siguiente en cada itineracion
            //con el metodo charAt(0) se adquiere el primer caracter de la palabra, y con toUpperCase() se las hace mayuscula.
        }

        let finalSentence = capitalizingSentece.join("");
        alert(finalSentence);
    } else {
        alert("Please introduce a sentece");
    }
}

let button = document.getElementById("button");
button.addEventListener("click", capitalizedSentece);