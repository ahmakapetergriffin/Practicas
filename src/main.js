"use strict";
let numero = 0;
function anterior() {
    if (numero <= 0) {
        return;
    }
    else {
        numero--;
        document.getElementById("imagen").src = "/src/Images/1.jpg";
    }
}
function posterior() {
    if (numero >= 1) {
        return;
    }
    else {
        numero++;
        document.getElementById("imagen").src = "/src/Images/2.jpg";
    }
}
