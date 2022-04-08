// // para transformar o JSON em objeto
// let produto = [];
// const produtoJSON = localStorage.getItem('ListaProdutos');

// produto = JSON.parse(produtoJSON);

// console.log(produto);

// a função de atualiza tela tem que colocar apos a recuperação do objeto JSON


const input = document.getElementById('txt');
const botaoAdcionar = document.getElementById('add');
const botaoRemoveTudo = document.getElementById('remTudo');
const botaoRemoveSelecionado = document.getElementById('remSel');
const botaoLocalStorage = document.getElementById('local');
const ul = document.getElementById('ul-lista');
let listaProduto = [];
    

 function atualizarLista() {
    ul.innerHTML = '';
    listaProduto.forEach(item => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        checkbox.onclick = event => {
            if(event.target.checked){
                item.status = true;
                let valor = prompt('Digite o Valor Do Produto:');
                item.valor = Number(valor);
                console.log(item.valor);
            } else {
                item.status = false;
            }
            console.log(item.status);
        }
        const btn = document.createElement('button');
        btn.innerText = 'X';
        const li = document.createElement('li');
        li.innerText = item.name;
        ul.appendChild(li);
        li.appendChild(checkbox);
        li.appendChild(btn);
       
    });
}

 function adcionar(){
    const inputProduto = input.value;
    if(!inputProduto) return;
     listaProduto.push({
         name: inputProduto,
         id: 0
     });

     input.value = '';
    atualizarLista();
 }

 atualizarLista();

botaoAdcionar.addEventListener('click',adcionar);
botaoRemoveTudo.addEventListener('click', () => {
    ul.innerHTML = [];
});
botaoRemoveSelecionado.addEventListener('click', () => {
  listaProduto.filter(item => {
      if(item.status === true){
          listaProduto.splice(item, 1);
          atualizarLista();
      }
  })
});
botaoLocalStorage.addEventListener('click', salvarStorage => {
    const produtoJSON = JSON.stringify(listaProduto);
    localStorage.setItem('ListaProdutos', produtoJSON);
});
  

function deletar(id){
    let vazio = [];
    

}

function calcular(){
    
}