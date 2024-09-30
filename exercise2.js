// // Warmup Exe

// // let ul = document.querySelector('#ul-list');


// // ul.addEventListener('click', (e)=>{
// //     console.log(e.target.textContent);
// //     console.log(e.composedPath());
// // });

// // let nav = document.querySelectorAll('li');

// // nav.forEach((li)=>{

// //     li.addEventListener('click', (e)=>{
// //         console.log(e.target.textContent);
// //         console.log(li.textContent);
// //         console.log(e.target.textContent);
// //     })

// // })

// // Exercise 1 and 2

// let table = document.querySelector('#table');

// table.addEventListener('click', (e)=>{

//     console.log(e.target.textContent);
//     console.log(e.eventPhase);
//     // let tbody = document.querySelector('tbody');
//     // tbody.addEventListener('click', (e)=>{
//     //     e.stopPropagation();
//     // });
// });

// table.addEventListener('click', (e)=>{

//     console.log("Captured");
//     console.log(e.eventPhase);
//     e.stopPropagation();
// }, {capture:true});

// Exercise 3

let form = document.querySelector('#addForm');
let input = document.querySelector('#input');

form.addEventListener('submit', (e)=>{

    console.log("submitted");
    e.preventDefault();
    console.log(input.value);
});