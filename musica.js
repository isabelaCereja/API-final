//API musica
//criação do JASON
var json =`{
    "id": 1,
    "nome": "Carol Biazin",
    "sobrenome": "No Escuro",
    "cidade": "São Paulo",
    "pais": "Brasil",
    "imagem": "<img src='img/noescuro1.png' width='200px'>",
    "link": "https://open.spotify.com/intl-pt/album/4TX968qKjmaLmCj7eWwySt"
}`;

var json2 =`{
    "id": 2,
    "nome": "SZA",
    "sobrenome": "SOS",
    "cidade": "San luis",
    "pais": "Estados Unidos",
    "imagem": "<img src='img/sos.jpg' width='200px'>",
    "link": "https://open.spotify.com/intl-pt/album/07w0rG5TETcyihsEIZR3qG"
}`;
var json3 =`{
    "id": 3,
    "nome": "Lana del Rey",
    "sobrenome": "Born to die",
    "cidade": "Manhattan",
    "pais": "Estados unidos",
    "imagem": "<img src='img/lana.jpg' width='200px'>",
    "link": "https://open.spotify.com/intl-pt/album/4X8hAqIWpQyQks2yRhyqs4"
}`;
var json4 =`{
    "id": 4,
    "nome": "Sabrina Carpenter",
    "sobrenome": "short n sweet",
    "cidade": "Quakertown",
    "pais": "Estados unidos",
    "imagem": "<img src='img/sabrina.jpg' width='200px'>",
    "link": "https://open.spotify.com/intl-pt/artist/74KM79TiuVKeVCqs8QtB0B"
}`;
var json5 =`{
    "id": 5,
    "nome": "Taylor Swift",
    "sobrenome": "1989 (taylor's version)",
    "cidade": "West Reading",
    "pais": "Estados unidos",
    "imagem": "<img src='img/tay.jpg' width='200px'>",
    "link": "https://open.spotify.com/intl-pt/album/64LU4c1nfjz1t4VnGhagcg"
}`;
var json6 =`{
    "id": 6,
    "nome": "Muse",
    "sobrenome": "Jimin ",
    "cidade": "Hoedong-dong",
    "pais": "coreia do Sul",
    "imagem": "<img src='img/muse.jpg' width='200px'>",
    "link": "https://open.spotify.com/intl-pt/album/15XcLhiVMlSOipUddTNDnr"
}`;


//converter o texto STRING para JSON
var dados1 = JSON.parse(json);
var dados2 = JSON.parse(json2);
var dados3 = JSON.parse(json3);
var dados4 = JSON.parse(json4);
var dados5 = JSON.parse(json5);
var dados6 = JSON.parse(json6);


//Link com JQUERY
var link1 = `<a href="${dados1.link}">Escute agora o novo Álbum</a>`;
var link2 = `<a href="${dados2.link}">Escute agora o novo Álbum</a>`;
var link3 = `<a href="${dados3.link}">Escute agora o novo Álbum</a>`;
var link4 = `<a href="${dados4.link}">Escute agora o novo Álbum</a>`;
var link5 = `<a href="${dados5.link}">Escute agora o novo Álbum</a>`;
var link6 = `<a href="${dados6.link}">Escute agora o novo Álbum</a>`;

function apertar1() {
    document.getElementById('imagem').innerHTML = dados1.imagem;
    document.getElementById('nome').innerHTML = dados1.nome;
    document.getElementById('sobrenome').innerHTML = dados1.sobrenome;
    document.getElementById('cidade').innerHTML = dados1.cidade;
    document.getElementById('pais').innerHTML = dados1.pais;
    document.getElementById('link').innerHTML = link1;
}
function apertar2() {
    document.getElementById('imagem').innerHTML = dados2.imagem;
    document.getElementById('nome').innerHTML = dados2.nome;
    document.getElementById('sobrenome').innerHTML = dados2.sobrenome;
    document.getElementById('cidade').innerHTML = dados2.cidade;
    document.getElementById('pais').innerHTML = dados2.pais;
    document.getElementById('link').innerHTML = link2;
}
function apertar3() {
    document.getElementById('imagem').innerHTML = dados3.imagem;
    document.getElementById('nome').innerHTML = dados3.nome;
    document.getElementById('sobrenome').innerHTML = dados3.sobrenome;
    document.getElementById('cidade').innerHTML = dados3.cidade;
    document.getElementById('pais').innerHTML = dados3.pais;
    document.getElementById('link').innerHTML = link3;
}
function apertar4() {
    document.getElementById('imagem').innerHTML = dados4.imagem;
    document.getElementById('nome').innerHTML = dados4.nome;
    document.getElementById('sobrenome').innerHTML = dados4.sobrenome;
    document.getElementById('cidade').innerHTML = dados4.cidade;
    document.getElementById('pais').innerHTML = dados4.pais;
    document.getElementById('link').innerHTML = link4;
}
function apertar5() {
    document.getElementById('imagem').innerHTML = dados5.imagem;
    document.getElementById('nome').innerHTML = dados5.nome;
    document.getElementById('sobrenome').innerHTML = dados5.sobrenome;
    document.getElementById('cidade').innerHTML = dados5.cidade;
    document.getElementById('pais').innerHTML = dados5.pais;
    document.getElementById('link').innerHTML = link5;
}

function apertar6() {
    document.getElementById('imagem').innerHTML = dados6.imagem;
    document.getElementById('nome').innerHTML = dados6.nome;
    document.getElementById('sobrenome').innerHTML = dados6.sobrenome;
    document.getElementById('cidade').innerHTML = dados6.cidade;
    document.getElementById('pais').innerHTML = dados6.pais;
    document.getElementById('link').innerHTML = link6;
}



console.log(dados1)
console.log(dados2)
console.log(dados3)
console.log(dados4)
console.log(dados5)
console.log(dados6)