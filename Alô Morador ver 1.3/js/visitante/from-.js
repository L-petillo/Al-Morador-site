var botaoAdicionar = document.querySelector("#adicionar-visitante");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();
	


	var form = document.querySelector("#form-adiciona");

	// extrai informacoes do visitante
    var visitante = obtemVisitantesDoFormulario(form);
	
	var erros = validaVisitantes(visitante);

	if(erros.length > 0 ){
		exibiMensagensDeErro(erros)

		return
	} 
	 // aciciona o visitante na tabela
	adicionaVisitantesNaTabela(visitante)

	 form.reset();
	 var mensagensDeErro = document.querySelector("#mensagens-erro");
	 mensagensDeErro.innerHTML = "";

});

function adicionaVisitantesNaTabela(visitante){
	var visitanteTr = montaTr(visitante);
	var tabela = document.querySelector("#tabela-visitantes");
	tabela.appendChild(visitanteTr);

}

function obtemVisitantesDoFormulario(form){
	var visitante = {
		nome: form.nome.value,
		visitado: form.visitado.value,
		bloco: form.bloco.value,
		ap: form.ap.value,
	}

	return visitante;
}

function montaTr(visitante){

	var visitanteTr = document.createElement("tr");
	visitanteTr.classList.add("visitante");

	visitanteTr.appendChild(montaTd(visitante.nome, "info-nome"));
    visitanteTr.appendChild(montaTd(visitante.visitado, "info-visitado"));
	visitanteTr.appendChild(montaTd(visitante.bloco, "info-bloco"));
	visitanteTr.appendChild(montaTd(visitante.ap, "info-ap"));


	return visitanteTr
}

function montaTd(dado,classe) {

	var Td = document.createElement("td");
	Td.textContent = dado;
	Td.classList.add(classe);

	return Td;
}

function validaVisitantes(visitante) {
    var erros = [];

    if (!visitante.nome) erros.push("O visitante não pode estar vazio.");
    
    // Verificação para garantir que ap contenha apenas números
	if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(visitante.visitado)) erros.push("O visitado deve conter apenas letras.");
	if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(visitante.bloco)) erros.push("O bloco deve conter apenas letras.");
    if (!/^\d+$/.test(visitante.ap)) erros.push("O ap deve conter apenas números.");
	if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(visitante.nome)) erros.push("O nome deve conter apenas letras.");
    
    if (!visitante.ap) erros.push("O ap não pode estar vazio.");
    if (!visitante.bloco) erros.push("O bloco não pode estar vazio.");


    // if (!validarRa(visitante.visitado)) erros.push("visitado é inválido.");
    // if (!validaBloco(visitante.bloco)) erros.push("bloco é inválido.");

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

