var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){
    console.log(this.value)
    var plural = document.querySelectorAll(".nomeNormal")

    if( this.value.length > 0){
        for(var i = 0; i < plural.length ; i++){
        var nomeNormal = plural[i];
        var tdNome = nomeNormal.querySelector(".info-nome")
        var nome = tdNome.textContent;
        var expressao = new RegExp(this.value,"i")
        if( !expressao.test(nome)){
            nomeNormal.classList.add("invisivel")
        }else{
            nomeNormal.classList.remove("invisivel")
        }
        }   

    }else{
        for(var i = 0; i < plural.length ; i++){
            var nomeNormal = plural[i];
            nomeNormal.classList.remove("invisivel")
        }
    }
}
)
    
