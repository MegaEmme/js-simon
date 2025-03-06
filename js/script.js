console.log("Mike's Simon Says");

// create elements

const countdownElement = document.getElementById('countdown');
console.log(countdownElement);

const instructionsElement = document.getElementById('instructions');
console.log(instructionsElement);

const numbersListsElement = document.getElementById('numbers-list');
console.log(numbersListsElement);

const answerFormElement = document.getElementById('answers-form');
console.log(answerFormElement);

const inputGroupElement = document.getElementById('input-group');
console.log(inputGroupElement);

//**************************************//

// create countdown from 10 to 0

let count=9;

const countdownBig = setInterval(function(){
    console.log(count);
    countdownElement.innerText = `${count}`;
    count --;
    if(count===-1){
        numbersListsElement.className = 'd-none';
        instructionsElement.innerText = "Inserisci tutti i numeri che ricordi (l'ordine non è importante)";
        answerFormElement.className = 'd-flex gap-5';
        clearInterval(countdownBig);
    }
}, 1000)

//**************************************//

// create list items inside ul dispalying random numbers between 1 and 50

for(let i = 0 ; i <9; i++){
    const li = document.createElement("li");
    li.innerText =  Math.floor((Math.random() * 50) + 1);
    numbersListsElement.appendChild(li);
    i++;
}

//**************************************//


