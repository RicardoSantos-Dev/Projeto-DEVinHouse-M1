const input = document.getElementById('txt');
const botaoAdcionar = document.getElementById('add');
const botaoRemoveTudo = document.getElementById('remTudo');
const botaoRemoveSelecionado = document.getElementById('remSel');
const botaoLocalStorage = document.getElementById('local');
const ul = document.getElementById('ul-lista');
const resultado = document.getElementById('res');
let valorTotal = 0;
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
                calcularTotal(item.valor);
            } else {
                item.status = false;
            }
            
        }
        const btn = document.createElement('button');
        btn.innerText = 'X';
        btn.addEventListener('click', () => deletar(item));
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
         name: inputProduto
     });

     input.value = '';
    atualizarLista();
 }

function calcularTotal(valor) {
    
    if(valor > 0){
        valorTotal += valor;
    }
    
    resultado.innerHTML = valorTotal;
}

function deletar(nome) {
    console.log(nome);
        listaProduto.find((item, i) =>{
        if(item === nome){
            listaProduto.splice(i, 1);
            return atualizarLista();
        }
    })
    
}
     

botaoAdcionar.addEventListener('click',adcionar);

botaoRemoveTudo.addEventListener('click', () => {
    ul.innerHTML = [];
});

botaoRemoveSelecionado.addEventListener('click', () => {
        let novoArray = listaProduto.filter(item => !item.status);
        listaProduto = novoArray;
        atualizarLista();
  });


botaoLocalStorage.addEventListener('click', salvarStorage => {
    const produtoJSON = JSON.stringify(listaProduto);
    localStorage.setItem('ListaProdutos', produtoJSON);
});