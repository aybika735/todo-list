const button = document.querySelector('button');
const input = document.querySelector('.input');
const list = document.querySelector('.list');


button.addEventListener('click', function(){

const div = document.createElement('div');
div.className = "list__item";
const btn = document.createElement('button');
btn.className = 'btn';
const btnround = document.createElement('button');
btnround.className = 'btn-round';

btn.textContent = 'x';
const listtext = document.createElement('div');
listtext.className = 'list_text';
listtext.prepend(input.value);
div.prepend(btnround,listtext,btn);
list.append(div);
input.value='';



btn.addEventListener('click', function(event){
    let deleted = event.target.parentNode.remove();

})

btnround.addEventListener('click', function(event){
    const i = document.createElement('i');
    i.className ='bi bi-check2';
    btnround.classList.toggle('bi-check2');

    let text = event.target.nextSibling;
   let toggle  = 'text-decoration';
   text.classList.toggle(toggle);
    
   


})


})






