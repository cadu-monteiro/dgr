function verificaSeTemItensQueNaoPodemFicarJuntos() {
    let itensCaixa = caixa.querySelectorAll("img");
    zeraConflitos(itensCaixa);
    let aviso = "Itens em Verde podem seguir juntos\n";
    let corAviso = "green";
    let encontrouConflito = false;
    
    itensCaixa.forEach(itemCaixa => {
        const item = json.find(element => element.nome === itemCaixa.id);
        
        if (item && item.listaNegra) {
            item.listaNegra.forEach(nomeNegra => {
                const itemExistente = caixa.querySelector(`img[id=${nomeNegra}]`);
                if (itemExistente) {
                    encontrouConflito = true;
                    aviso = "Itens em Vermelho não podem seguir juntos\n";
                    itemExistente.classList.add("bordaVermelha");
                    itemCaixa.classList.remove("bordaVerde");
                    corAviso = "red";
                }
            });
        }
    });

    const avisoElemento = document.getElementById("aviso");
    avisoElemento.innerText = aviso;
    avisoElemento.style.color = corAviso;
}

function zeraConflitos(itensCaixa) {
    itensCaixa.forEach(item => {
        const elemento = caixa.querySelector(`img[id=${item.id}]`);
        if (elemento) {
            elemento.classList.remove("bordaVermelha");
            elemento.classList.add("bordaVerde");
        }
    });
}


