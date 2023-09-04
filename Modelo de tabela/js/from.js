var botaoAdicionar = document.querySelector("#adicionar-NomeNormal");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();
	


	var form = document.querySelector("#form-adiciona");

	// extrai informacoes do NomeNormal
    var NomeNormal = obtemMaiusculoDoFormulario(form);
	
	var erros = validaMaiusculo(NomeNormal);

	if(erros.length > 0 ){
		exibiMensagensDeErro(erros)

		return
	} 
	 // aciciona o NomeNormal na tabela
	adicionaMaiusculoNaTabela(NomeNormal)

	 form.reset();
	 var mensagensDeErro = document.querySelector("#mensagens-erro");
	 mensagensDeErro.innerHTML = "";

});

function adicionaMaiusculoNaTabela(NomeNormal){
	var NomeNormalTr = montaTr(NomeNormal);
	var tabela = document.querySelector("#tabela-Plural");
	tabela.appendChild(NomeNormalTr);

}

function obtemMaiusculoDoFormulario(form){
	var NomeNormal = {
		nome: form.NomeNormal.value,
		visitado: form.visitado.value,
		bloco: form.bloco.value,
		ap: form.ap.value,
	}

	return NomeNormal;
}

function montaTr(NomeNormal){

	var NomeNormalTr = document.createElement("tr");
	NomeNormalTr.classList.add("NomeNormal");

	NomeNormalTr.appendChild(montaTd(NomeNormal.nome, "info-nome"));
    NomeNormalTr.appendChild(montaTd(NomeNormal.visitado, "info-visitado"));
	NomeNormalTr.appendChild(montaTd(NomeNormal.bloco, "info-bloco"));
	NomeNormalTr.appendChild(montaTd(NomeNormal.ap, "info-ap"));


	return NomeNormalTr
}

function montaTd(dado,classe) {

	var Td = document.createElement("td");
	Td.textContent = dado;
	Td.classList.add(classe);

	return Td;
}

function validaMaiusculo(NomeNormal) {
    var erros = [];

    if (!NomeNormal.nome) erros.push("O NomeNormal não pode estar vazio.");
    
    // Verificação para garantir que ap contenha apenas números
	if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(NomeNormal.visitado)) erros.push("O visitado deve conter apenas letras.");
	if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(NomeNormal.bloco)) erros.push("O bloco deve conter apenas letras.");
    if (!/^\d+$/.test(NomeNormal.ap)) erros.push("O ap deve conter apenas números.");
	if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(NomeNormal.nome)) erros.push("O nome deve conter apenas letras.");
    
    if (!NomeNormal.ap) erros.push("O ap não pode estar vazio.");
    if (!NomeNormal.bloco) erros.push("O bloco não pode estar vazio.");


    // if (!validarRa(NomeNormal.visitado)) erros.push("visitado é inválido.");
    // if (!validaBloco(NomeNormal.bloco)) erros.push("bloco é inválido.");

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

