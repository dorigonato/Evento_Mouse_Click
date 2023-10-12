//GRUPO
//DORIVAL RIGONATO JUNIOR
//ALESSANDRO
//ANDERSON
//FABRIZIO LOUZADA


let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

function atualizarSubtotal(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}

atualizarSubtotal()

//variáveis

let btnAdicionarProduto01 = document.querySelector('#btn-adicionar-produto-01')
let quantidadeProduto01 = document.querySelector('#quantidade-produto-01')
let valorProduto01 = 11.66

//função

function adicionarUm(){
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1

  subtotalInfo.quantidade = subtotalInfo.quantidade + 1
  subtotalInfo.valor = subtotalInfo.valor + valorProduto01



  atualizarSubtotal()
}   


btnAdicionarProduto01.addEventListener('click',adicionarUm)

let btnSubtrairProduto01 = document.querySelector('#btn-subtrair-produto-01')

function subtrairUm(){
  
  if (quantidadeProduto01.value > 0) {
    quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1
    }

    if(subtotalInfo.quantidade > 0){
  subtotalInfo.quantidade = subtotalInfo.quantidade - 1
  subtotalInfo.valor = subtotalInfo.valor - valorProduto01

  atualizarSubtotal()
    }

}
btnSubtrairProduto01.addEventListener('click',subtrairUm)