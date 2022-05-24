document.querySelector('#res').addEventListener('click', () => {
    let n1 = parseInt(document.querySelector('#num1').value);
    let n2 = parseInt(document.querySelector('#num2').value);
    let opc = document.querySelector('#opc').value;
    let res;
    let msj;

    switch (opc) {
        case "def":
            msj = "Elige una opción";
            document.querySelector('#result').innerHTML = `${msj}`;
            break;
        case "sum":
            res = n1 + n2;
            document.querySelector('#result').innerHTML = `${n1} + ${n2} = ${res}`;
            break;
        case "res":
            res = n1 - n2;
            document.querySelector('#result').innerHTML = `${n1} - ${n2} = ${res}`;
            break;
        case "mult":
            res = n1 * n2;
            document.querySelector('#result').innerHTML = `${n1} * ${n2} = ${res}`;
            break;
        case "div":
            res = n1 / n2;
            resDecimal = res.toFixed(2);
            document.querySelector('#result').innerHTML = `${n1} / ${n2} = ${resDecimal}`;
            break;
    }

    if (opc == "def") {
        msj = "Elige una opción";
        document.querySelector('#result').innerHTML = `${msj}`;
    } else if (!n1) {
        msj = "Ingresa el primer número";
        document.querySelector('#result').innerHTML = `${msj}`;
    } else if (!n2) {
        msj = "Ingresa el segundo número";
        document.querySelector('#result').innerHTML = `${msj}`;
    }
});

let borrar = () => {
    $("#result").html("");
    num1.value = "";
    num2.value = "";
    opc.value = "def";
};