
let errorMsgEl = document.getElementById("errorMsg");
let input1El = document.getElementById("input1");
let input2El = document.getElementById("input2");
let input3El = document.getElementById("input3");


function reset()
{
numberGuess = Math.ceil(Math.random() * 50)
console.log("Random No. : " + numberGuess); 
}
reset();

let amount1 = 500;
let amount2 = 500;
let amount3 = 500;

function  random(){
    

    let user1  = parseInt(input1El.value);
    console.log( " User1: " + user1);
    let user2  = parseInt(input2El.value);
    console.log( " User2: " + user2);
    let user3  = parseInt(input3El.value);
    console.log( " User3: " + user3);

    if (user1 === numberGuess && user2 === numberGuess && user3 === numberGuess) {
        errorMsgEl.textContent = "*User1, User2, and User3 Guessed Correct Number";
        amount1 += 100;
        amount2 += 100;
        amount3 += 100;
    }
    else if (user1 === numberGuess && user2 === numberGuess) {
        errorMsgEl.textContent = "*User1 and User2 Guessed Correct Number";
        amount1 += 100;
        amount2 += 100;
        amount3 -= 100;
    } 
    else if (user2 === numberGuess && user3 === numberGuess) {
        errorMsgEl.textContent = "*User2 and User3 Guessed Correct Number";
        amount2 += 100;
        amount3 += 100;
        amount1 -= 100;
    } 
    else if (user1 === numberGuess && user3 === numberGuess) {
        errorMsgEl.textContent = "*User1 and User3 Guessed Correct Number";
        amount1 += 100;
        amount3 += 100;
        amount2 -= 100;
    } 
    else if (user1 === numberGuess) {
        errorMsgEl.textContent = "*User1 Guessed Correct Number";
        amount1 += 100;
        amount2 -= 100;
        amount3 -= 100;
    } 
    else if (user2 === numberGuess) {
        errorMsgEl.textContent = "*User2 Guessed Correct Number";
        amount2 += 100;
        amount1 -= 100;
        amount3 -= 100;
    } 
    else if (user3 === numberGuess) {
        errorMsgEl.textContent = "*User3 Guessed Correct Number";
        amount3 += 100;
        amount1 -= 100;
        amount2 -= 100;
    } 
    else {
        errorMsgEl.textContent = "*No one guessed the correct number";
        amount1 -= 100;
        amount2 -= 100;
        amount3 -= 100;
    }

    input1El.value = amount1;
    input2El.value = amount2;
    input3El.value = amount3;
}
    