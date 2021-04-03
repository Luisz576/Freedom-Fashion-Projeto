//CAR
function set_quant_car(q){
    document.getElementById('qnt_car').innerHTML = q
    itens = ''
    for(let i = 0; i < q; i++){
        itens += `
        <div class="col-md-4 produto_item">
            <h3>Camisa teste</h3>
            <a href="./details.html?id_produto=3"><img src="./images/produtos/f_1.jpg"></a>
            <div class="desc_produto_item">
                <p>R$100,00</p>
                <h4>Uma camisa macia feita de seda</h4>
            </div>
        </div>
        `
    }
    document.getElementById('car_itens').innerHTML = itens == '' ? `<div class="alert alert-warning" role="alert">Não há nada no seu carrinho!<div>` : itens
    set_total(q)
}

function set_total(q){
    document.getElementById('preco').innerHTML = `${(q * 100)},00`
}

set_quant_car(2)