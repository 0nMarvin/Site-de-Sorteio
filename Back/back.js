function sorteio(max){
    if (max == 0){
        console.error("Insira um número maior que 0 para ser sorteado");
    return;
    }

    // let evitar = [];
    // for (let i = 0; i < max; i++){
    //     evitar.push(i);
    // }

    let sorteado = [];
    
    while (sorteado.length < max){
        let nominho = Math.floor(Math.random() * max);

        if(!sorteado.includes(nominho))
        sorteado.push(nominho);
        
        if(sorteado.length - 1 == sorteado[sorteado.length - 1])
        sorteado.pop();
    }

    return sorteado;
}

function montaLista(nome, email, i, lista){
    lista.push({index: i, nome: nome, email: email});
    return lista;
}

let lista = [];
let index = 0;
lista = montaLista("João", "emeil pika", index, lista);
index++;
lista = montaLista("Marcus", "emeil criativo", index, lista);
index++;
lista = montaLista("Luquinhas <3", "emeil foda", index, lista);
index++;
lista = montaLista("Joice", "emeil feminino", index, lista);
index++;
lista = montaLista("Felippe", "emeil depressivo", index, lista);
index++;
console.log(lista)


let teste = sorteio(lista.length);
console.log(teste);