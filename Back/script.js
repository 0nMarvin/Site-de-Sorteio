let frame = document.getElementsByClassName("botton")[0]; // Adiciona [0] para pegar o primeiro elemento com a classe "botton"
let data = document.getElementsByClassName("data")[0]; // Adiciona [0] para pegar o primeiro elemento com a classe "botton"

function createDiv(){
    const div = data.cloneNode(true);
    return div;
}

document.getElementsByClassName("icon")[0].addEventListener('click', function(event) {
    frame.appendChild(createDiv()); // Passa a string diretamente para a função cria
});

document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('smalIcon')) {
        console.log('Elemento clicado!');
    }
});