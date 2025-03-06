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

const inputElement = document.querySelectorAll('input');

const form = document.querySelector('#answe-form');
let randomNumbersArray = [];

let inputNumbersArray = [];

const messageElement = document.getElementById('message');
// console.log(messageElement);

//**************************************//

// create countdown from 10 to 0

let count=9;

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
    randomNumbersArray.push(parseInt(li.innerText));
}

console.log(randomNumbersArray);

//**************************************//

// create form response

answerFormElement.addEventListener('submit',function(e) {

    e.preventDefault();

    // console.log('form inviato');
    
    for(let i = 0; i < inputElement.length; i++){

        // console.log(inputElement[i].value)
        
        inputNumbersArray.push(parseInt(inputElement[i].value));
        
    }
    let result = compareNumbers(randomNumbersArray,inputNumbersArray)
    console.log(inputNumbersArray);
    console.log(result);
})



//**************************************//

// create function compareNumbers

function compareNumbers(arrayOne,arrayTwo){
    let count = 0;
    for(let i = 0 ; i<arrayOne.length; i++){
        if(arrayOne[i]===arrayTwo[i]){
            count = 1;
        }
    }
    if(count){
        messageElement.classList.remove("text-success", "text-danger");
        let ciao = messageElement.innerText='Hai vinto';
        console.log(ciao);
    } else {
        let ciao = messageElement.innerText='Hai perso';
        console.log(ciao);
    }
}




//**************************************//