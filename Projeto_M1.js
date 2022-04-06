const input = document.getElementById('txt');
const botaoAdcionar = document.getElementById('add');
const botaoRemoveTudo = document.getElementById('remTudo');
const botaoRemoveSelecionado = document.getElementById('remSel');
const botaoLocalStorage = document.getElementById('local');
const ul = document.getElementById('ul-lista');
let listaProduto = [];
    
// function pegarDados() {
//      const input = document.getElementById('txt').value;
//  }
 
//  function validarInput(input) {
//      if(!input){
//          return;
//     }    
//  }

 function atualizarLista() {
    ul.innerHTML = '';
    listaProduto.forEach(item => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = event => {
            if(event.target.checked){
                item.status = true;
            } else {
                item.status = false;
            }
            console.log(item.status);
        }
        const li = document.createElement('li');
        li.innerText = item.name;
        ul.appendChild(li);
        li.appendChild(checkbox);
       
    });
}

 function adcionar(){
    const inputProduto = input.value;
    if(!inputProduto) return;
    // pegarDados();
    // validarInput();
     listaProduto.push({
         name: inputProduto
     });

     input.value = '';
    atualizarLista();
 }

 atualizarLista();

botaoAdcionar.addEventListener('click',adcionar);
//botaoRemoveTudo.addEventListener('click', );
//botaoRemoveSelecionado.addEventListener('click', );
//botaoLocalStorage.addEventListener('click', )

// const produtos = [
//     {Id: 1, name: 'Bolo', status: false, preco: 4.60},
//     {Id: 2, name: 'Feijao', status: true, preco: 8.60},
//     {Id: 3, name: 'Batata', status: true, preco: 5.60},
//     {Id: 4, name: 'Cenoura', status: true, preco: 11.60}
// ];

// // para tranformar o objeto em JSON e salvar no LocalStorage
// botaoLocalStorage.addEventListener('click', () => {
//     const produtoJSON = JSON.stringify(produtos);
//     localStorage.setItem('ListaProdutos', produtoJSON);
// });

// // para transformar o JSON em objeto
// let produto = [];
// const produtoJSON = localStorage.getItem('ListaProdutos');

// produto = JSON.parse(produtoJSON);

// console.log(produto);

// a função de atualiza tela tem que colocar apos a recuperação do objeto JSON
