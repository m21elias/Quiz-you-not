

const answers = ["C" , "B" , "D" , "B" , "D" , "C" , "C" , "C" , "C" , "B" , "D" , "C"];


function displayResults() {
    let correct = 0;
    let incorrect = 0;
    
    for(var i = 0; i < answers.length; i++) {
        const answer = answers[i];
        let userInput = document.getElementById("c" + [i]).value
        const question = document.getElementById("question" + [i]);
        
        if(answer == userInput) {
            question.className = "correct";
            correct++;
        } else {
            question.className = "incorrect";
            incorrect++;
        };
    };
    document.getElementById("correct").innerHTML = "Correct: " + correct
    document.getElementById("incorrect").innerHTML = "Incorrect: " + incorrect
}


