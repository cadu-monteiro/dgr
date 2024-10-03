let itens = document.getElementById("itens")
itens.addEventListener("load", gerarItens());

function gerarItens() {
    let divItens = document.getElementById("itens")
    let html = "";

    json.forEach(item => {
        html +=
            `<div id='${item.nome}' draggable='true' value='${item.nome}' class='box item'>
                <abbr title='${item.info}'>
                    <img src='Imagens/${item.nome}.png' alt='' style='width: 68px'/>
                </abbr>
            </div>`

    });

    divItens.innerHTML = html;
}

