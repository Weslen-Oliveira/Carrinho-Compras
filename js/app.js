let totalGeral = 0;

function adicionar(){
    const produto = document.getElementById('produto').value;
    const quantidade = document.getElementById('quantidade').value;
    const nomeProduto = produto.split('-')[0].trim();
    const precoProduto = produto.split('R$')[1];
    const total = document.getElementById('valor-total');
    const listaProdutos = document.getElementById('lista-produtos');

    if(quantidade == ''){
        alert('Quantidade nao pode estar vazia');
        return;
    }
    if(quantidade  < 0 ){
        alert('A quantidade não pode ser negativa');
        return
    }
    if(quantidade == 0 ){
        alert('A quantidade não pode ser Zero');
        return
    }

    listaProdutos.innerHTML = listaProdutos.innerHTML +
        `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x </span>${nomeProduto}<span class="texto-azul"> R$${precoProduto}</span>
        </section>`;

        let preco = quantidade * precoProduto;
        totalGeral += preco;

    total.textContent = `R$ ${totalGeral}`;

}

function limpar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('valor-total').textContent = '';
    document.getElementById('lista-produtos').innerHTML = '';
    totalGeral= 0;
}
