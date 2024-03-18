let frame = document.getElementsByClassName("botton")[0];

function createInput(name) {
    const input = document.createElement("input");
    input.type = "text";
    input.name = name;
    return input;
}

function createImage(){
    const img = document.createElement("img");
    img.src = "../Images/imgX.png"
    img.className = "smalIcon"
    return img;
}

function createText(name){
    const archor = document.createElement("a");
    archor.textContent = name;
    archor.className = "font"
    return archor;
}


function createDiv(){
    const div = document.createElement("div");
    div.className = "data"
    div.appendChild(createImage())
    div.appendChild(createText("Apelido: "))    
    div.appendChild(createInput("nameField"))
    div.appendChild(createText("Email: "))    
    div.appendChild(createInput("emailField"))
    return div;
}

function saveData(){
    const list =document.getElementsByClassName("data");
    const cont = [];

    //Se caso já existe o dado na memória local, o mesmo é excluido.
    if(localStorage.getItem("sorteio")){
        localStorage.removeItem("sorteio");
    }

    //Verifica cada div data, pegando os dados do input apelido e o email.
    Array.from(list).forEach(element=>{
        const name = element.querySelector('[name="nameField"]').value;
        const email = element.querySelector('[name="emailField"]').value;
        cont.push([name,email])
    })

    const contString = JSON.stringify(cont);

    localStorage.setItem("sorteio", contString);
}

function readLocalData(localData){
    frame.querySelector('[name="nameField"]').value = localData[0][0];
    frame.querySelector('[name="emailField"]').value = localData[0][1];

    for(let cont = 1;cont < localData.length; cont++){
        let div = createDiv();
        console.log(localData[cont][0])
        div.querySelector('[name="nameField"]').value = localData[cont][0];
        div.querySelector('[name="emailField"]').value = localData[cont][1];
        frame.appendChild(div)
    }

}

//Salva os Dados do Sorteio a cada 30 Segundos.
setInterval(saveData, 30000);

document.getElementsByClassName("icon")[0].addEventListener('click', function(event) {
    frame.appendChild(createDiv()); // Passa a string diretamente para a função cria
});
//Salva os Dados quando a pagina for se fechar.
window.addEventListener("beforeunload", function(event) {
    saveData();
});

// Evento que ativa quando a página é colocada em segundo plano
document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === 'hidden') {
        // Executando o salvamento dos dados.
        saveData();
    } 
});

//Evento ativado ao clicar no icone de Next.
document.getElementById("next").addEventListener('click', function(event) {
    //Salva os dados
    saveData();

    //Verifique se há no mínimo 2 campos para redirecionar a página finish.
    if (document.getElementsByClassName("data").length < 2) {
        alert("Precisamos de mais dados para realizar o sorteio");
        event.preventDefault(); 
    }
});

document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('smalIcon')) {
        var divToDelete = event.target.closest('.data');
        divToDelete.remove();
    }
});

//Evento quando a pagina abre, verifica se a arquivos na memória local, e os coloca na página.
window.addEventListener("load", (event) => {
    if(localStorage.getItem("sorteio")){     
        const arrayDoLocalStorage = JSON.parse(localStorage.getItem("sorteio"))
        readLocalData(arrayDoLocalStorage)
    }
});