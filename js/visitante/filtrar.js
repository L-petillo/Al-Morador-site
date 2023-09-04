var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){
    console.log(this.value)
    var visitantes = document.querySelectorAll(".visitante")

    if( this.value.length > 0){
        for(var i = 0; i < visitantes.length ; i++){
        var visitante = visitantes[i];
        var tdNome = visitante.querySelector(".info-nome")
        var nome = tdNome.textContent;
        var expressao = new RegExp(this.value,"i")
        if( !expressao.test(nome)){
            visitante.classList.add("invisivel")
        }else{
            visitante.classList.remove("invisivel")
        }
        }   

    }else{
        for(var i = 0; i < visitantes.length ; i++){
            var visitante = visitantes[i];
            visitante.classList.remove("invisivel")
        }
    }
}
)
    
