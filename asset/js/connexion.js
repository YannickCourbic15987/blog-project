const btn = document.querySelector("#btn-drop");
const navDrop = document.querySelector("#navDrop");
btn.addEventListener('click',()=>{
if(navDrop.classList.contains("init")){
    navDrop.classList.toggle("final")
}
})
let i= 0;
let j=0;
function create(e){
const btnMod = document.createElement('button')
const result = document.querySelector('.result');
let title = document.createElement('h2');
const desc =document.createElement('p');
let BtnRem = document.createElement('button');
const div = document.createElement('div');
const newinput = document.createElement('input');
const textarea = document.createElement('textarea');
const form = document.createElement('form');

div.appendChild(form);
form.id="newform";
div.className = 'box' + i;
result.appendChild(div)
i++;
e.preventDefault();
console.log(e.target)
div.appendChild(title);
div.appendChild(desc);
form.appendChild(newinput);
form.appendChild(textarea);
newinput.classList.add('hidden');
textarea.classList.add('hidden');
title.id ="title" + i;
title.textContent = e.target[0].value;
desc.textContent=e.target[1].value;
div.appendChild(BtnRem);
BtnRem.textContent ='supprimer'
BtnRem.className ='btn' + i
BtnRem.addEventListener('click', (e)=>{

  e.preventDefault()
  console.log(e.target)
   div.remove()
})
div.appendChild(btnMod);
btnMod.textContent ='modifier'
btnMod.className='mod'+ i;

btnMod.addEventListener('click', ()=>{
 title.classList.add('hidden');
 desc.classList.add('hidden');
 newinput.classList.toggle('visible');
 textarea.classList.toggle('visible');
 btnMod.classList.add("hidden");
const btnMod2 = document.createElement('button');
form.appendChild(btnMod2)
btnMod2.textContent ='mod'
btnMod2.type='submit'

})
form.addEventListener('submit',(e)=>{
    e.preventDefault()
if( title.classList.contains('hidden') &&  desc.classList.contains('hidden')){
    newinput.classList.remove('visible');
    textarea.classList.remove('visible');
    title.classList.toggle('visible');  
    desc.classList.toggle('visible');
    title.textContent = e.target[0].value;
    desc.textContent = e.target[1].value;
    btnMod.classList.remove('hidden');
}
})
}

const form = document.querySelector(".form");
form.addEventListener('submit', (e)=>{
create(e)
})