let carrinhoCompras = [];
let produtoSelecionado = document.getElementById('produto').value;



function adicionar() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let produtoSelecionado = document.getElementById('produto').value;


    if (carrinhoCompras.length == 0) {
        carrinhoCompras.push({
            produto: produtoSelecionado,
            unidades: quantidade
        })
    } else {
        itensRepetidos(produtoSelecionado, quantidade);
    }

    console.log(carrinhoCompras);

    itensCarrinho();
}

function itensCarrinho() {
    let sectionCarrinho = document.getElementById('carrinho-box');
    let itemCarrinho = document.createElement('div');
    let itemProduto = document.createElement('span');
    let itemUnidade = document.createElement('span');
    let textoInicial = document.getElementById('texto-inicial-carrinho');

    removerItens(textoInicial, itemCarrinho);

    itemUnidade.classList.add('texto-azul');
    itemCarrinho.id = 'item-carrinho';

    for (let i = 0; i < carrinhoCompras.length; i++) {
        itemProduto.textContent = carrinhoCompras[i].produto;
        itemUnidade.textContent = carrinhoCompras[i].unidades + "x ";
        itemCarrinho.appendChild(itemUnidade);
        itemCarrinho.appendChild(itemProduto);
    }

    console.log('ok')
    sectionCarrinho.appendChild(itemCarrinho);
}

function removerItens(textoInicial, itemCarrinho) {

    if (textoInicial) {
        textoInicial.remove();
    }

    if (itemCarrinho) {
        itemCarrinho.remove();
    }
}


function itensRepetidos(produtoSelecionado, quantidade) {

    for (let i = 0; i < carrinhoCompras.length; i++) {
        if (carrinhoCompras.length > 0 && produtoSelecionado === carrinhoCompras[i].produto) {
            console.log('é igual');
            carrinhoCompras[i].unidades += quantidade
        } else {
            carrinhoCompras.push({
                produto: produtoSelecionado,
                unidades: quantidade
            })
        }
    }

}

function limpar() {
    let quantidade = parseInt(document.getElementById('quantidade').value = 1);
    carrinhoCompras = []; 
    console.log(carrinhoCompras = []);
}