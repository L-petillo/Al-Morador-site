var botaoAdicionar = document.querySelector("#adicionar-encomenda");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();
	


	var form = document.querySelector("#form-adiciona");

	// extrai informacoes do encomenda
    var encomenda = obtemEncomendaDoFormulario(form);
	
	var erros = validaEncomenda(encomenda);

	if(erros.length > 0 ){
		exibiMensagensDeErro(erros)

		return
	} 
	 // aciciona o encomenda na tabela
	adicionaEncomendaNaTabela(encomenda)

	 form.reset();
	 var mensagensDeErro = document.querySelector("#mensagens-erro");
	 mensagensDeErro.innerHTML = "";

});

function adicionaEncomendaNaTabela(encomenda){
	var encomendaTr = montaTr(encomenda);
	var tabela = document.querySelector("#tabela-encomendas");
	tabela.appendChild(encomendaTr);

}

function obtemEncomendaDoFormulario(form){
	var encomenda = {
		nome: form.nome.value,
		recebido: form.recebido.value,
		bloco: form.bloco.value,
		ap: form.ap.value,
		dt: form.dt.value,
	}

	return encomenda;
}

function montaTr(encomenda){

	var encomendaTr = document.createElement("tr");
	encomendaTr.classList.add("encomenda");

	encomendaTr.appendChild(montaTd(encomenda.nome, "info-nome"));
    encomendaTr.appendChild(montaTd(encomenda.recebido, "info-recebido"));
	encomendaTr.appendChild(montaTd(encomenda.bloco, "info-bloco"));
	encomendaTr.appendChild(montaTd(encomenda.ap, "info-ap"));
	encomendaTr.appendChild(montaTd(encomenda.dt, "info-dt"));


	return encomendaTr
}

function montaTd(dado,classe) {

	var Td = document.createElement("td");
	Td.textContent = dado;
	Td.classList.add(classe);

	return Td;
}

function validaEncomenda(encomenda) {
    var erros = [];

    if (!encomenda.nome) erros.push("O encomenda não pode estar vazio.");
    
    // Verificação para garantir que ap contenha apenas números
	if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(encomenda.recebido)) erros.push("O recebido deve conter apenas letras.");
	if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(encomenda.bloco)) erros.push("O bloco deve conter apenas letras.");
    if (!/^\d+$/.test(encomenda.ap)) erros.push("O ap deve conter apenas números.");
    if (!/^\d{2}\/\d{2}$/.test(encomenda.dt)) {
		erros.push("O dt deve conter dois números, seguidos por uma barra e mais dois números.");
	  }
	  
	if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(encomenda.nome)) erros.push("O nome deve conter apenas letras.");
    
    if (!encomenda.ap) erros.push("O ap não pode estar vazio.");
    if (!encomenda.bloco) erros.push("O bloco não pode estar vazio.");


    // if (!validarRa(encomenda.recebido)) erros.push("recebido é inválido.");
    // if (!validaBloco(encomenda.bloco)) erros.push("bloco é inválido.");

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

