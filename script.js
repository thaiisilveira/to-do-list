// adicionando elementos: 

function addElemento() {
    let textoInput = document.getElementById("texto");
    let lista = document.getElementById("lista");

    if (textoInput.value.trim() === "") {
        alert("Por favor, digite uma tarefa.")
        return;
    }

// criando novos itens:

    let novoItem = document.createElement("li");

// criando um checkbox:
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() { marcarConcluido(this); };

// criando o texto da tarefa com span:
    let spanTexto = document.createElement("span");
    spanTexto.innerText = textoInput.value;

// criando ícone da lixeira:
    let lixeira = document.createElement("i");
    lixeira.classList.add("fa-solid", "fa-trash");
    lixeira.onclick = function() { removerTarefa(this); };

// adicionando os novos elementos dentro de <li>:
    novoItem.appendChild(checkbox);
    novoItem.appendChild(spanTexto);
    novoItem.appendChild(lixeira);

// adicionando <li> na lista:
    lista.appendChild(novoItem);

// limpando o input:
    textoInput.value = "";

}

document.getElementById("botaoAdd").addEventListener("click", addElemento);

function marcarConcluido(checkbox) {
    let tarefa = checkbox.nextElementSibling; // seleciona a tag span ao lado do checkbox;
    if (checkbox.checked) {
        tarefa.style.textDecoration = "line-through";
        tarefa.style.color = "#AFA994";
    } else {
        tarefa.style.textDecoration = "none";
        tarefa.style.color = "#33595e"
    }

}

function removerTarefa(icone) {
    let item = icone.parentElement; // captura todo o <li>
    item.remove ();
}