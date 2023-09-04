var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){
    console.log(this.value)
    var encomendas = document.querySelectorAll(".encomenda")

    if( this.value.length > 0){
        for(var i = 0; i < encomendas.length ; i++){
        var encomenda = encomendas[i];
        var tdNome = encomenda.querySelector(".info-nome")
        var nome = tdNome.textContent;
        var expressao = new RegExp(this.value,"i")
        if( !expressao.test(nome)){
            encomenda.classList.add("invisivel")
        }else{
            encomenda.classList.remove("invisivel")
        }
        }   

    }else{
        for(var i = 0; i < encomendas.length ; i++){
            var encomenda = encomendas[i];
            encomenda.classList.remove("invisivel")
        }
    }
}
)
    
