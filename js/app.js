let carrinhoCompras = [];
let produtoSelecionado = document.getElementById('produto').value;
let listaDeProdutos = document.getElementById('carrinho-box');
let itemCarrinho = document.createElement('div');

function adicionar() {
    let textoInicial = document.getElementById('texto-inicial-carrinho');
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let produtoSelecionado = document.getElementById('produto').value;
    // let valorProduto = document.getElementsById('valor-produto').textContent;


    if (carrinhoCompras.length == 0) {
        carrinhoCompras.push({
            produto: produtoSelecionado,
            unidades: quantidade,
            // valor: valorProduto,
        })
    } else {
        itensRepetidos(produtoSelecionado, quantidade);
    }

    if (textoInicial) {
        textoInicial.remove();
    }

    // valorProduto.classList.add('texto-azul');

    itensCarrinho();

}


function itensCarrinho() {
    let sectionCarrinho = document.getElementById('carrinho-box');
    // let valorProduto = document.getElementsByClassName('opcoes').textContent;
    let itemCarrinho = document.createElement('div');
    let itemProduto = document.createElement('span');
    let itemUnidade = document.createElement('span');
    // let itemValor = document.createElement('span');
    
    
    itemUnidade.classList.add('texto-azul');
    itemCarrinho.classList.add('produto-carrinho')
    itemCarrinho.id = 'item-carrinho';
    
    
    
    for (let i = 0; i < carrinhoCompras.length; i++) {
        itemUnidade.id = carrinhoCompras[i].produto;
        itemProduto.id = carrinhoCompras[i].produto;
        // itemValor.textContent = valorProduto;
        itemProduto.textContent = carrinhoCompras[i].produto;
        itemUnidade.textContent = carrinhoCompras[i].unidades + "x ";
        itemCarrinho.appendChild(itemUnidade);
        itemCarrinho.appendChild(itemProduto);
    }

    sectionCarrinho.appendChild(itemCarrinho);
    // console.log('esse é o valor', valorProduto);
}


function itensRepetidos(produtoSelecionado, quantidade) {

    for (let i = 0; i < carrinhoCompras.length; i++) {
        if (carrinhoCompras.length > 0 && produtoSelecionado === carrinhoCompras[i].produto) {
            let itemRepetido = document.getElementById(carrinhoCompras[i].produto);

            itemRepetido.remove();

            carrinhoCompras[i].unidades += quantidade
            
            console.log("carrinho", itemRepetido)
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
    let textoFinal = document.createElement('span');
    let textoTotal = document.querySelector('.carrinho__total').textContent; 

    textoFinal.id = 'texto-inicial-carrinho';
    textoTotal.textContent = 'Total: R$0,00'

    if (carrinhoCompras.length > 0) {
        carrinhoCompras = [];
    }

    while (listaDeProdutos.firstChild) {
        listaDeProdutos.removeChild(listaDeProdutos.firstChild);
    }

    textoFinal.textContent = "Carrinho vazio";
    listaDeProdutos.appendChild(textoFinal);
}