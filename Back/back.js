const nodemailer = require('nodemailer');

function sorteio(max){
    if (max <= 0){
        console.error("Insira um número maior que 0 para ser sorteado");
    return;
    }

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

function enviarEmail(destino, resultado){
    // Configurações do transporte para o Hotmail
    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: '',
            pass: ''
        },
    });
    
    // Opções do e-mail
    let mailOptions = {
        from: '',
        to: destino,
        subject: 'Sorte.IO',
        html: `<h1> Aqui está seu sorteio </h1> <p>Você sorteou o(a) ${resultado}</p>`,
        text: `Aqui está seu sorteio. Você sorteou o(a) ${resultado}`
    };
    
    // Enviar e-mail
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.error('Erro ao enviar e-mail:', error);
    }
    console.log('E-mail enviado com sucesso:', info.response);
    });
}

let lista = [];
let index = 0;
lista = montaLista("João", "", index, lista);
index++;
lista = montaLista("Marcus", "", index, lista);
index++;
lista = montaLista("Luquinhas <3", "", index, lista);
index++;
lista = montaLista("Joice", "", index, lista);
index++;
lista = montaLista("Felippe", "", index, lista);
index++;
console.log(lista)


let teste = sorteio(lista.length);
console.log(teste);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function executeDelayedCode() {
    for (let i=0; i<lista.length; i++) {
        console.log(`Enviando email ${i+1}`)
        enviarEmail(lista[i].email, lista[teste[i]].nome);
  
        // Pause execution for 5 seconds (5000 milliseconds)
        await delay(5000);
    }
  }

  executeDelayedCode();