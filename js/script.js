const caixa = document.querySelector('.caixa-vazia');
caixa.addEventListener('dragover', (event) => {
    event.preventDefault();
});

caixa.addEventListener('drop', async (event) => {
    event.preventDefault();
    const imagemSrc = event.dataTransfer.getData('text/plain');
    const imagemExiste = caixa.querySelector(`img[src="${imagemSrc}"]`);
    if (!imagemExiste) addImagemNaCaixa(imagemSrc);
    verificaSeTemItensQueNaoPodemFicarJuntos()
});

function dragStart(imagem) {
    imagem.addEventListener('dragstart', (event) => {
        const imagem = event.target;
        event.dataTransfer.setData('text/plain', imagem.src);
        setTimeout(() => {
            imagem.remove();
            verificaSeTemItensQueNaoPodemFicarJuntos()
        }, 0);
    });
}

function addImagemNaCaixa(imagemSrc) {
    const itensCaixa = caixa.querySelectorAll('img');
    if (itensCaixa.length >= 5) {
        alert('A caixa não pode conter mais de 5 itens.');
        return;
    }
    const imagem = document.createElement('img');
    imagem.src = imagemSrc;
    imagem.id = pegarIdDaImagemSrc(imagemSrc);
    imagem.setAttribute('draggable', 'true');
    dragStart(imagem);
    caixa.appendChild(imagem);
}

function pegarIdDaImagemSrc(imagemSrc) {
    imagemSrc = imagemSrc.split("Imagens/")[1];
    return imagemSrc.split(".")[0];
}

let apagar = document.getElementById('limpar');
apagar.onclick = function () {
    location.reload()
}
