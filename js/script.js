console.log("Mike's Simon Says");

// create elements

const countdownElement = document.getElementById('countdown');
// console.log(countdownElement);

const instructionsElement = document.getElementById('instructions');
// console.log(instructionsElement);

const numbersListsElement = document.getElementById('numbers-list');
// console.log(numbersListsElement);

const answerFormElement = document.getElementById('answers-form');
// console.log(answerFormElement);

const inputGroupElement = document.getElementById('input-group');
// console.log(inputGroupElement);

const messageElement = document.getElementById('message');
// console.log(messageElement);

const inputElement = document.getElementsByTagName('input');

let randomNumbersArray = [];

let inputNumbersArray = [];

//**************************************//

// create countdown from 10 to 0

let count=3;

const countdownBig = setInterval(function(){
    // console.log(count);
    countdownElement.innerText = `${count}`;
    count --;
    if(count===-1){
        numbersListsElement.className = 'd-none';
        instructionsElement.innerText = "Inserisci tutti i numeri che ricordi (l'ordine non è importante)";
        answerFormElement.className = 'gap-5';
        clearInterval(countdownBig);
    }
}, 1000)

//**************************************//

// create list items inside ul dispalying random numbers between 1 and 50

for(let i = 0 ; i <5; i++){
    const li = document.createElement("li");
    li.innerText =  Math.floor((Math.random() * 50) + 1);
    numbersListsElement.appendChild(li);
    randomNumbersArray.push(li.innerText);
}

console.log(randomNumbersArray);

//**************************************//

// create form response

answerFormElement.addEventListener('submit',function(e) {
    e.preventDefault();

    // console.log('form inviato');
    console.log(inputElement);
    // messageElement.innerText = 'ciao';
})

//**************************************//