//função Recursiva
function contagemRegressiva(numero) {
    console.log(numero);

    let proximo = numero - 1;
    if(proximo > 0) {
        contagemRegressiva(proximo);
    }
    
    
}

//contagemRegressiva(10);

//função media
function calculoMedia(notas) {
    var soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }
    media = soma / notas.length;
    return media;
} 

//função de nota HTML
/*
 * formulario de envio de dados para calculo de media
*/

function aprovaReprova(notas) {
    let media = calculoMedia(notas);
    let condicao = media >= 7 ? "Aprovado" : "Reprovado";
    return 'Media: ' + media + ' - Resultado: ' + condicao;
}

const formulario1 = document.getElementById('formulario-01');

if(formulario1) {
    formulario1.addEventListener('submit', function( evento ) {

        evento.preventDefault();
        evento.stopPropagation();

        if(this.getAttribute('class').match(/error/) ) {
            return false;
        }

        let dados = new FormData(this);

        let notas = [];

        for(let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // um número
        
        
            if(!isNaN(numero)) {
                notas.push(numero);
            }
        
            
        }

        console.log(notas);
    
        let texto = aprovaReprova(notas);

        document.getElementById('Resultado').innerHTML = texto;
    });
    }



function validaCamposObrigatorio(elemento){
   
   elemento.addEventListener('focusout', function(event) {

        event.preventDefault();
    
        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho";
            this.classList.add('error');
            this.parentNode.classList.add('error');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('error');
            this.parentNode.classList.remove('error');
            
        }
    });
}

function validaCamposNumerico(elemento){
   
    elemento.addEventListener('focusout', function(event) {
 
         event.preventDefault();

         let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value;

         if(numero !== "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('error');
            this.parentNode.classList.remove('error');
            
         } else {
              document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho";
             this.classList.add('error');
                this.parentNode.classList.add('error');
             return false;
             
         }
     });
 }

 function validaCamposEmail(elemento){

    elemento.addEventListener('focusout', function(event) {
 
        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
        if(this.value.match(emailValido)){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('error');
            this.parentNode.classList.remove('error');
            
         }else {
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho";
            this.classList.add('error');
            this.parentNode.classList.add('error');
            return false;
            }
    });

 }

 function validaUF(elemento) {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();

        const UFValido = /^[A-Z]{2}$/;
        if (elemento.value.match(UFValido)) {
            document.querySelector('.mensagem').innerHTML = '';
            elemento.classList.remove('error');
            elemento.parentNode.classList.remove('error');
        } else {
            document.querySelector('.mensagem').innerHTML = 'Verifique o preenchimento dos campos em vermelho - UF em maiúsculo';
            elemento.classList.add('error');
            elemento.parentNode.classList.add('error');
            return false;
        }
    });
}


let camposObrigatorio = document.querySelectorAll('input.obrigatorio');
let CamposNumerico = document.querySelectorAll('input.numero');
let CamposEmail = document.querySelectorAll('input.email');
let camposUF = document.querySelectorAll('input.UF');

for (let emFoco of camposUF) {
    validaUF(emFoco);
}

for( let emFoco of CamposEmail){
    validaCamposEmail(emFoco);
}

for( let emFoco of camposObrigatorio){
    validaCamposObrigatorio(emFoco);
}

for( let emFoco of CamposNumerico){
    validaCamposNumerico(emFoco);
}
