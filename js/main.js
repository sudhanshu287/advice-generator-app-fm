let message=document.querySelector('.advice__message');
let adviceId=document.querySelector('#advice-id');
let diceButton=document.querySelector('.dice__icon');

let url='https://api.adviceslip.com/advice';

const getAdviceMessage=async()=>{
    let res=await fetch(url);
    let messageData=await res.json();
    message.innerHTML=messageData.slip.advice;
    adviceId.innerHTML=messageData.slip.id;
}

diceButton.addEventListener("click",()=>{
    getAdviceMessage();
});

// divider icon change for desktop devices
function imageChange(x){
    if(x.matches){
        document.querySelector('#divider').src='./images/pattern-divider-desktop.svg';
    }
}
let x=window.matchMedia('(min-width:1200px)');
imageChange(x);
x.addListener(imageChange);