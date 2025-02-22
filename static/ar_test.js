const quizData = [
    {
        question: "Do you experience a sore or hurt throat often or when you wake up or in specific scenarios often?",
        options: ["Yes", "No", "Maybe"]
    },
    {
        question: "Do you experience frequent nasal/sinus problems during the week such as runny nose, blocked nose, pressure, burning or tingling sensation, or pain?",
        options: ["Yes", "No", "Maybe"]
    },

];

    const questionElement = document.getElementById("question"); //document. References the html page that includes the name of the js file
    const optionsElement = document.getElementById("options");
    //const submitButton = document.getElementById("submit");

    let currentQuestion = 0;
    let score = 0;

    function showQuestion() {
        const question = quizData[currentQuestion]; //put question object in variable
        questionElement.innerText = question.question; //puts question string in the html page(maybe)

        optionsElement.innerHTML = ""
        question.options.forEach(option => { //iterates over each option in the options array
            const button = document.createElement("button"); //creates a button element
            button.innerText = option; //put options element(string) inside of the button element
            optionsElement.appendChild(button); //puts button where the options element is on the page
            button.addEventListener("click", selectAnswer); //if the button is clicked then call the selectAnswer function and send the button as a parameter(maybe)
        });
    }

    function selectAnswer(e){
        const selectedButton = e.target;

        if(selectedButton.innerText === "Yes" || selectedButton.innerText === "Maybe"){
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() { //use backtick(`) to denote template literals
        quiz.innerHTML = `
            <h1>Your results are in!</h1>
            <p>Your score: ${score}</p>
        `;
    }

    showQuestion();