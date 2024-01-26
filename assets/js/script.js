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
                alert(`You clicked ${gameType}`);
            }
        });
    }
});



function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}