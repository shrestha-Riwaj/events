let btn = document.querySelector('#btn');
let p = document.querySelector('p');
btn.addEventListener('click', ()=>{

    p.toggleAttribute('hidden');
})