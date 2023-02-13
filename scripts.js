

let chave = "64c36026e0d86eac65e5a9560cb1dcbf"




async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric")
        .then(resposta => resposta.json())
    colocaNaTela(dados)

}


function colocaNaTela(dados) {
    document.querySelector(".cidade").innerHTML = dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/"
        + dados.weather[0].icon + ".png"
    console.log(dados)

}




function clique() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)

}