//There are three things that we need to add  every time we want to create a new question.  
//Firstly, our run game function needs to  have the new game type added.
//Secondly, we need to create our display question function (with subtraction is different becouse we need to modify the second numebr so we dont have negative numbers)
//And thirdly, we need to update our calculate correct answer function to generate the correct answer based on the operator.


// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() { //Code to be execute when the page has finishing loading
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {//go through the bottons and return each element that will be stored in that variable button in each iteration
        button.addEventListener("click", function() { // code to be execute when the user clicks a button
            if (this.getAttribute("data-type") === "submit") {// "this" is the bottons we just clicked, 
               checkAnswer();//we deleted the alert and create an evenListener for the submit button,
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
    } else if (gameType === "multiply") { //added after addition
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") { //added after multiply
        displaySubtractQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`); // Otherwise, it will throw an error.
        throw `Unknown game type: ${gameType}. Aborting!`;// stop game from running and whatever we supply as an error message here it will print  that in the console for debugging.  
    }                                                     // now we have to go to displayAdditionQuestion....
}
/**
 * Checks the answer agaist the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);// take the value "answer-box" and store it in our user answer variable.(user guests = 23)
    let calculatedAnswer = calculateCorrectAnswer();// (returns an array), a calculated answer equals a two element array  containing 21, the correct answer and addition[21, addition] we need to compare our user's answer with  the first element in the calculated answer array. ( 23 with 21)
    let isCorrect = userAnswer === calculatedAnswer[0]; // it is equel to our first number?

    if (isCorrect) { 
        alert("Hey! You got it right! :D");
        incrementScore();//we added this after creating incrementScore function....
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();//we added this after creating incrementWrongAnswer function....
    }

    runGame(calculatedAnswer[1]);

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
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

//For both functions (IncrementScore and wrond answer) we're simply going  to read the current value from the dom, add one, and then write it back. 
/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText); //retrive "score" and put it in a variable named oldScore
    document.getElementById("score").innerText = ++oldScore;// inner text and content text are the same!! . Putting  the double plus signs before the variable means that JavaScript will get the ID of score,  then set the inner text to one plus old score.  

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore; // We just need to tell our check answer function to  call these two functions at the appropriate time. So let's just scroll up to  our check answer function.  
}

function displayAdditionQuestion(operand1, operand2) {//The two arguments that its going to accept are  going to be called operand 1 and operand 2.
    document.getElementById('operand1').textContent = operand1;  //And we're going to interrogate our HTML, we're going  to get the element that has the ID of operand 1, and we're going to set its  text content to our number.  
    document.getElementById('operand2').textContent = operand2; // we're going to get the element with the ID of operand 2 and set  its content to our second random number.
    document.getElementById('operator').textContent = "+";// we're going to get  the element with the ID of operator and we're going to set that to a plus sign.
}                                      
                                        
function displaySubtractQuestion(operand1,operand2) {//its different for avoid negative numbers
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;  //is operand 1 bigger than operand 2? If so, return operand 1. And if not return operand 2.
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1,operand2) { //added after add multiply to else condition in runGame.., now modify calculateCorrectAnswer
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}