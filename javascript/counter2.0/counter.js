let counter = 0;

//se nao houver algo dentro do armazenamento local
if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

function count() {
    //counter é igual ao valor inicial de localStorage caso nao exista nada no localStorage
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter);

    
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;


});