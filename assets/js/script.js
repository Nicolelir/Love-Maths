// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() { //Code to be execute when the page has finishing loading
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {//go through the bottons and return each element that will be stored in that variable button in each iteration
        button.addEventListener("click", function() { // code to be execute when the user clicks a button
            if (this.getAttribute("data-type") === "submit") {// "this" is the bottons we just clicked, 
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    runGame("addition"); //we want an addition  game to start as soon as the page is loaded. It's going to be our default game.
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType) {// gameType will work by default, we put it in the eventListener. 
                            //  we're passing  the game type into the function as an argument

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;//+1 is for avoid 0, this will generate random numbers between 1 and 25. 
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") { //   we're checking the game type  parameter if it's equal to addition 
        displayAdditionQuestion(num1, num2); //and then it's going to display our addition  question.
    } else {
        alert(`Unknown game type: ${gameType}`); // Otherwise, it will throw an error.
        throw `Unknown game type: ${gameType}. Aborting!`;// stop game from running and whatever we supply as an error message here it will print  that in the console for debugging.  
    }                                                     // now we have to go to displayAdditionQuestion....
}

function checkAnswer() {

}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() { //read our values from the dom and storing them in variables.  

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}




function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {//The two arguments that its going to accept are  going to be called operand 1 and operand 2.
    document.getElementById('operand1').textContent = operand1;  //And we're going to interrogate our HTML, we're going  to get the element that has the ID of operand 1, and we're going to set its  text content to our number.  
    document.getElementById('operand2').textContent = operand2; // we're going to get the element with the ID of operand 2 and set  its content to our second random number.
    document.getElementById('operator').textContent = "+";// we're going to get  the element with the ID of operator and we're going to set that to a plus sign.
}                                      
                                        
function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}