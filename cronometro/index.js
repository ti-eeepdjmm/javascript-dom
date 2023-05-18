//elementos do DOM
const cronometro = document.querySelector("#cronometro");
const btn_modo_noturno = document.querySelector("#btn-modo-noturno");
const container = document.querySelector("#container");
const icone_ligar = document.querySelector("#icone-ligar");
const icone_desligar = document.querySelector("#icone-desligar");

function atualizaHora(){
    const data = new Date();
    const horas = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    const hora_formatada = `${horas}:${minutos}:${segundos}`; 
    cronometro.children[0].innerHTML = hora_formatada;
}

setInterval(() => atualizaHora(), 1000);

//função do botão
btn_modo_noturno.onclick = function(){
   //1-mudar a cor de fundo de toda a página 
   //2-mudar a cor de texto de toda a página
   //3-mudar o ícone do botão
   container.classList.toggle("modo-noturno");
   icone_ligar.classList.toggle("invisivel");
   icone_desligar.classList.toggle("invisivel");
}

