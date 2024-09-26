//API clima
async function getWeather() {
    //Variavel que pega o valor do input cidade
    var cidade = document.getElementById('cidade').value

    //Conectando a API
    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    //Variavel para consumir oJSON item temperatura
    var TempCelsius = resposta.data.main.temp;

    console.log(TempCelsius)

    //Imprimir na Tela FRONT END utilizando JQUERY
    document.getElementById('temperatura').innerHTML = `A temperatura atual de ${cidade} é: ${TempCelsius.toFixed(0)} °C`
}