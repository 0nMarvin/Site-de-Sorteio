function sorteio(max){
    if (max == 0){
        console.error("Insira um número maior que 0 para ser sorteado");
    return;
    }

    let sorteado = [];

    while (sorteado.length < max){
        let nominho = Math.floor(Math.random() * max);

        if(!sorteado.includes(nominho))
        sorteado.push(nominho);
    }

    return sorteado;
}

let teste = sorteio(3);
console.log(teste);