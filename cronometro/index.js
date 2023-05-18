//Seleciona elementos do DOM
const cronometro = document.querySelector("#cronometro");
const btn_modo_noturno = document.querySelector("#btn-modo-noturno");
const container = document.querySelector("#container");
const icone_ligar = document.querySelector("#icone-ligar");
const icone_desligar = document.querySelector("#icone-desligar");

//função usada para criar hora formatada
function atualizaHora(){
    const data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    
    /*
        Resolve o problema do formato de (horas| minutos | segundos) menores que 10 adicionando (0) à esquerda. 
        Ex. 1:1:5 => 01:01:05
    */
    horas = horas < 10 ? horas.toString().padStart(2,"0") : horas;
    minutos = minutos < 10 ? minutos.toString().padStart(2,"0") : minutos;
    segundos = segundos < 10 ? segundos.toString().padStart(2,"0") : segundos;

    const hora_formatada = `${horas}:${minutos}:${segundos}`; 
    cronometro.children[0].innerHTML = hora_formatada;
}

//atualiza a hora  a cada 1000ms ou 1s
setInterval(() => atualizaHora(), 1000);

//função do botão modo noturno
btn_modo_noturno.onclick = function(){
   //1-mudar a cor de fundo de toda a página 
   //2-mudar a cor de texto de toda a página
   //3-mudar o ícone do botão
   container.classList.toggle("modo-noturno");
   icone_ligar.classList.toggle("invisivel");
   icone_desligar.classList.toggle("invisivel");
}

