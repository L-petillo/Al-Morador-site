var botaoAdicionar = document.querySelector("#buscar-Visitantes");

botaoAdicionar.addEventListener("click",function(){
    console.log("buscando");

    var xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")
    var erroAjax = document.querySelector("#erro-ajax")

    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
        erroAjax.classList.add("invisivel")
        var resposta = xhr.responseText
        var visitantes = JSON.parse(resposta);

        visitantes.forEach(function(visitante){
            adicionaVisitantesNaTabela(visitante)
         })
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel")
        }
       
    })

    xhr.send()
})