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
    frame.querySelector('[name="emailField"]').value = localData[0][0];

    for(let cont = 1;cont < localData.length; cont++){
        let div = createDiv();
        console.log(localData[cont][0])
        div.querySelector('[name="nameField"]').value = localData[cont][0];
        div.querySelector('[name="emailField"]').value = localData[cont][1];
        frame.appendChild(div)
    }

}

document.getElementsByClassName("icon")[0].addEventListener('click', function(event) {
    frame.appendChild(createDiv()); // Passa a string diretamente para a função cria
});

document.getElementById("next").addEventListener('click', function(event) {
    if(localStorage.getItem("sorteio")){
        localStorage.removeItem("sorteio");
    }
    saveData();
});

document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('smalIcon')) {
        var divToDelete = event.target.closest('.data');
        divToDelete.remove();
    }
});

window.addEventListener("load", (event) => {
    if(localStorage.getItem("sorteio")){
        
        const arrayDoLocalStorage = JSON.parse(localStorage.getItem("sorteio"))
        readLocalData(arrayDoLocalStorage)
    }
});