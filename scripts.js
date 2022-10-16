function funcaoDoClick() {
    var valorDoInput = document.getElementById('inputNumero').value;
    var inputOpcao = document.getElementById('inputOpcao').value;

    // if ()si a pessoa digitar fah tenque devomver a resposta fah
    if (inputOpcao == "Fahrenheit") {  // calculo fahrenheit
        var calcFah = (valorDoInput * 9 / 5 + 32);
        console.log(calcFah.toFixed(2));
        document.getElementById('divResposta').innerHTML = calcFah.toFixed(2);

    } else if (inputOpcao == "Celsius") {

        // calcula do celsius
        var calcCel = (valorDoInput - 32) * 5 / 9;
        console.log(calcCel.toFixed(2));
        document.getElementById('divResposta').innerHTML = calcCel.toFixed(2);
    }
}