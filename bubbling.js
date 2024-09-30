function bubble(){
    console.log("Hello");
};

// let navs = document.querySelector('li');
// navs.forEach((nav)=>{
//     nav.addEventListener('click', (e)=>{
//         console.log(e.target.textContent);
//     })
// });

// let li = document.querySelectorAll('li');
// li.forEach((nav)=>{
//     nav.addEventListener('click', (e)=>{
//         console.log(e.target.textContent);
//     })
// })

let ul = document.querySelector('ul');
ul.addEventListener('click',(e)=>{

    // console.log(e.target);
    console.log(e.composedPath());
    console.log(e.target.textContent);
});