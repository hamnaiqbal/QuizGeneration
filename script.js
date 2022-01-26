const quiz = [
    {
        "question": "Britain and France declared war on Germany on 3 September 1939 after the German invasion of which country?",
        "answers": {
            "a": "Denmark",
            "b": "Poland",
            "c": "Czechoslovakia",
            "correct": "b"
        }
    },
    {
        "question": "When did Germany invade the USSR?",
        "answers": {
            "a": "May 1940",
            "b": "May 1940",
            "c": "June 1941",
            "correct": "c"
        }
    },
    {
        "question": "What was the name of Britain's new bombing policy in May 1942 that targeted German cities?",
        "answers": {
            "a": "Tactical bombing",
            "b": "Area bombing",
            "c": "Precision bombing",
            "correct": "b"
        }
    },
    {
        "question": "What was the name of the army officer who planted the bomb that almost killed Hitler in July 1944?",
        "answers": {
            "a": "Colonel Stauffenberg",
            "b": "Field Marshal Rommel",
            "c": "Colonel Tresckow",
            "correct": "a"
        }
    },
    {
        "question": "To which country in Nazi occupied Europe were Jews sent as part of the 'Final Solution' agreed at the Wannsee Conference?",
        "answers": {
            "a": "Poland",
            "b": "Czechoslovakia",
            "c": "Estonia",
            "correct": "a"
        }
    },
    {
        "question": "What was the name of the biggest Nazi death camp?",
        "answers": {
            "a": "Treblinka",
            "b": "Sobibor",
            "c": "Auschwitz-Birkenau",
            "correct": "c"
        }
    },
    {
        "question": "Where did German army lose its first battle of the war in Europe, in early 1943?",
        "answers": {
            "a": "Moscow",
            "b": "Stalingrad",
            "c": "Leningrad",
            "correct": "b"
        }
    },
    {
        "question": "When did Germany surrender to the Allies, ending World War Two in Europe?",
        "answers": {
            "a": "March 1945",
            "b": "May 1945",
            "c": "August 1945",
            "correct": "b"
        }
    },
    {
        "question": "In which German city were the trials of those Nazis suspected of war crimes held from late 1945?",
        "answers": {
            "a": "Berlin",
            "b": "Dresden",
            "c": "Nuremberg",
            "correct": "c"
        }
    },
    {
        "question": "Who was the first Chancellor of the Federal Republic of Germany (West Germany)?",
        "answers": {
            "a": "Wilhelm Pieck",
            "b": "Konrad Adenauer",
            "c": "Willy Brandt",
            "correct": "b"
        }
    }
]
let count = 0;
let score = 0;
const quizquestion = document.querySelector(".question");
const opt1 = document.querySelector("#option1");
const opt2 = document.querySelector("#option2");
const opt3 = document.querySelector("#option3");
const submit = document.querySelector("#submit");
const answers1 = document.querySelectorAll(".answer")
const showSc = document.querySelector("#showScore");


const loadQuestions = () => {
    const listOfQuestions = quiz[count];
    quizquestion.innerHTML = listOfQuestions.question;
    opt1.innerHTML = listOfQuestions.answers.a;
    opt2.innerHTML = listOfQuestions.answers.b;
    opt3.innerHTML = listOfQuestions.answers.c;

}

loadQuestions();

const getAnswer = () => {
    let ans;
    answers1.forEach(currentAnswer => {
        if (currentAnswer.checked) {
            ans = currentAnswer.id;
        }
    });
    const corAnswer = {ans1: 'a', ans2: 'b', ans3: 'c'};
    return corAnswer[ans];
}

submit.addEventListener('click', () => {
    const checkanswer = getAnswer();
    console.log({ checkanswer, correct: quiz[count].answers.correct, score });

    if (checkanswer == quiz[count].answers.correct) {
        score = score + 1;
    };
    count++;
    if (count < quiz.length) {
        loadQuestions();

    } else {
        showSc.innerHTML = `
        <h2> Your Score Is:  ${score}/ ${quiz.length}</h2>
       <button class="Submit" onClick="location.reload()"> Play Again </button>
        `;

        showSc.classList.remove("myscore")
    }


});