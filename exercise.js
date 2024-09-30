// Exercise 1
let btn = document.querySelector('#btn');
btn.addEventListener('click', ()=>{
    console.log("Hello");
});

let p = document.querySelector('p');
    p.style.display = 'none';

let h1 = document.querySelector('h1');

let hide = document.querySelector('#hide');
hide.style.display = "none";

let showSecret = document.querySelector('#secret');
showSecret.addEventListener('click', (e)=>{
    console.log(e.type);
    console.log('A hidden portal to NetherWorld.');
    p.style.display = "block";
    hide.style.display = "block";

    h1.toggleAttribute('hidden');
});

hide.addEventListener('click', (e)=>{
    p.style.display = 'none';
    hide.style.display = 'none';
})

// Exercise 2
let play = document.querySelector('#play');
let lucky = document.querySelector('#lucky');
// let same = document.querySelector('.same')
let nextTime = document.querySelector('#nextTime');

const winCondition = (number)=>{
        if(number > 7){
            lucky.removeAttribute('hidden');
            nextTime.setAttribute('hidden', '');
        }
        else{
            nextTime.removeAttribute('hidden');
            lucky.setAttribute('hidden', '');
        }

}

play.addEventListener('click',(e)=>{

    let number = Math.floor(Math.random()*10)+1;
    console.log(number);

    winCondition(number);
    // if(number > 7 ){
    //     // using style
    //     // lucky.style.display = "block";
    //     // nextTime.style.display = 'none';
    //     console.log(`You got number: ${number}. You are Lucky`);

    //      // using toggle - won't work properly
    //     // lucky.toggleAttribute('hidden');
    //     // same.toggleAttribute('hidden');

    //     // using remove and setAttribute
    //     lucky.removeAttribute('hidden');
    //     nextTime.setAttribute('hidden', "");
    // }
    // else{
    //     // using style
    //     // nextTime.style.display = "block";
    //     // lucky.style.display = "none";

    //     // using toggle - won't work properly
    //     // nextTime.toggleAttribute('hidden');
    //     // same.toggleAttribute('hidden');

    //     // using remove and setAttribute
    //     nextTime.removeAttribute('hidden');
    //     lucky.setAttribute('hidden', "");
    //     console.log(`You got number: ${number}. Better luck next time!!!`);
    // } 
});

// Exercise 3

let input = document.querySelector('#text');
let showText = document.querySelector('#showText');

input.addEventListener('input', ()=>{
    console.dir(input);
    console.log(input.value);
    showText.textContent = input.value;
    showText.style.color = 'blue';
    showText.removeAttribute('hidden');

    // using toggle gives similar problem like the prev one
    // showText.toggleAttribute('hidden');
});

// this in events

let thiss = document.querySelector('#thiss');
thiss.addEventListener('click', function (e){
    console.log(this);
    console.dir(this);
})