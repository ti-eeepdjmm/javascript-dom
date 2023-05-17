function atualizaHora(){
    const data = new Date();
    const horas = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    const hora_formatada = `${horas}:${minutos}:${segundos}`; 
    const cronometro = document.querySelector("#cronometro");
    cronometro.children[0].innerHTML = hora_formatada;
}

setInterval(() => atualizaHora(), 1000);