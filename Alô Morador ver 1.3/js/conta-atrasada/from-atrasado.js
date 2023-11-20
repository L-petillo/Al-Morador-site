var botaoAdicionar = document.querySelector("#adicionar-morador");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();
	


	var form = document.querySelector("#form-adiciona");

	// extrai informacoes do morador
    var morador = obtemMoradorDoFormulario(form);
	
	var erros = validaMorador(morador);

	if(erros.length > 0 ){
		exibiMensagensDeErro(erros)

		return
	}
	 // aciciona o morador na tabela
	adicionaMoradorNaTabela(morador)

	 form.reset();
	 var mensagensDeErro = document.querySelector("#mensagens-erro");
	 mensagensDeErro.innerHTML = "";

});

function adicionaMoradorNaTabela(morador){
	var moradorTr = montaTr(morador);
	var tabela = document.querySelector("#tabela-moradores");
	tabela.appendChild(moradorTr);

}

function obtemMoradorDoFormulario(form){
	var morador = {
		nome: form.nome.value,
		cm: form.cm.value,
		cb: form.cb.value,
		dv: form.dv.value
	}

	return morador;
}

function montaTr(morador){

	var moradorTr = document.createElement("tr");
	moradorTr.classList.add("morador");
    
	moradorTr.appendChild(montaTd(morador.nome, "info-nome"));
	moradorTr.appendChild(montaTd(morador.cm, "info-cm"));
	moradorTr.appendChild(montaTd(morador.cb, "info-boleto"));
	moradorTr.appendChild(montaTd(morador.dv, "info-data-vencimento"));
	


	return moradorTr
}

function montaTd(dado,classe) {

	var Td = document.createElement("td");
	Td.textContent = dado;
	Td.classList.add(classe);

	return Td;
}

function validaMorador(morador) {
    var erros = [];

    if (!morador.nome) erros.push("O nome não pode estar vazio.");
    
    // Verificação para garantir que CM contenha apenas números
    if (!/^\d+$/.test(morador.cm)) erros.push("O CM deve conter apenas números.");
	if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(morador.nome)) erros.push("O nome deve conter apenas letras.");
	if (!/^\d{2}\/\d{2}$/.test(morador.dv)) {
		erros.push("A data deve conter dois números, seguidos por uma barra e mais dois números.");
	  }

    

    if (!morador.cb) erros.push("O codigo do boleto não pode estar vazio.");
 
    // if (!validarRa(morador.cm)) erros.push("CM é inválido.");
    // if (!validaSalario(morador.salario)) erros.push("Salário é inválido.");

    return erros;
}


function exibiMensagensDeErro(erros){
	var ul = document.querySelector("#mensagens-erro")
	ul.innerHTML = "";

	erros.forEach(function(erro) {

		var li = document.createElement("li")
		li.textContent = erro;
		ul.appendChild(li);
	});
}

document.addEventListener("DOMContentLoaded", function() {
    var today = new Date();
    var rows = document.querySelectorAll(".morador");

    rows.forEach(function(row) {
        var dataVencimento = row.querySelector(".info-data-vencimento").textContent;
        var [diaVencimento, mesVencimento] = dataVencimento.split("/");

        // Supondo que o formato da data seja DD/MM
        var dataVencimentoDate = new Date(today.getFullYear(), parseInt(mesVencimento) - 1, parseInt(diaVencimento));

        if (dataVencimentoDate < today) {
            row.style.backgroundColor = "#FFCCCC";
        }
    });
});

