function greet (){
    console.log("Good Morning!");
}

function name(){
    console.log("User!!");
}

function clickButton(){
   greet();
   name();
}

// let btn = document.querySelector('#btn');
// btn.addEventListener('click', ()=>{
//     console.log("New Button Clicked");
// });

// btn.addEventListener('mouseover', ()=>{
//     let num = Math.random((10));
//     console.log(num);
// });

btn.addEventListener('click', greet);

btn.removeEventListener('click', greet);

