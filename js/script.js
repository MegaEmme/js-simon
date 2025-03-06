console.log("Mike's Simon Says");

const countdownElement = document.getElementById('countdown')
console.log(countdownElement);

let count=10;

const countdownBig = setInterval(function(){
    console.log(count);
    countdownElement.innerText = `${count}`;
    count --;
    if(count===-1){
        clearInterval(countdownBig)
    }
}, 1000)
