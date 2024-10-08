function verificaSeTemItensQueNaoPodemFicarJuntos() {
    let itensCaixa = caixa.querySelectorAll("img");
    zeraConflitos(itensCaixa)
    let aviso = "";
    itensCaixa.forEach(itemCaixa => {
        var item = json.find(element => element.nome == itemCaixa.id)
        for (let index in item.listaNegra) {
            var itemExistente = caixa.querySelector(`img[id=${item.listaNegra[index]}]`)
            if (itemExistente) {
                aviso ="Os itens em Vermelho não podem seguir juntos" + "\n"
                itemExistente.className = "bordaVermelha"
                
            }
            
            
            
                
        }
    });
    document.getElementById("aviso").innerText = aviso
}


function zeraConflitos(itensCaixa) {
    itensCaixa.forEach(item => {
        caixa.querySelector(`img[id=${item.id}]`).className = "Podem ir juntos"
    })
}
