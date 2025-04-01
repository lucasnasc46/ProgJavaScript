function mostrarDiv(divId){

    document.getElementById("decBin").classList.add("d-none");
    document.getElementById("decOcta").classList.add("d-none");
    document.getElementById("decHex").classList.add("d-none");

    document.getElementById(divId).classList.remove("d-none");
        
}

document.getElementById("getNumber").addEventListener("submit", function(event) {
    event.preventDefault();

    let numero = parseInt(document.getElementById("num").value);

    if (numero === 0 ) return 0;

   /* let binario = "";
    while(numero >0){
        let resto = numero %2;
        binario = resto + binario;
        numero = Math.floor(numero/2);
    }*/

    document.getElementById("resultadoB").textContent = "resultado : " + numero.toString(2);
    document.getElementById("resultadoO").textContent = "Resultado: " + numero.toString(8);
    document.getElementById("resultadoH").textContent = "Resultado: " + numero.toString(16).toUpperCase();
});

