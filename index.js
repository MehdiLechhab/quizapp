//questions and their answer options with the right answer and each country flag
STORE = [
{ question: `What is the capital of Liberia?` ,
choice1 : `Morocco` ,
choice2 : `Romania` ,
choice3 : `Monrovia` ,
choice4 : `Jakarta` ,
answer : `Monrovia` ,
icon : `assets/liberia.png` ,
alt : `Liberian flag icon`,
fact: `Liberia is the only country in Africa with native Africans that is founded by the people of United States. The American Colonization Society founded Liberia in 1821 as a place for free African Americans to migrate to.` } 
, 
{ question : `What is the capital of China?` ,
choice1 : `Beirut` ,
choice2 : `Benin` ,
choice3 : `Beijing` ,
choice4 : `Taipei` ,
answer : `Beijing` ,
icon : `assets/china.png` ,
alt : `Chinese flag icon`,
fact: `The Chinese New Year celebration lasts for 15 days. | In China, every year is represented by one of 12 animals.` } 
, 
{ question : `What is the country of Kabul?` ,
choice1 : `Afghanistan` ,
choice2 : `Armenia` ,
choice3 : `Beirut` ,
choice4 : `Bamako` ,
answer : `Afghanistan` ,
icon : `assets/afghanistan.png` ,
alt : `Afghanistan flag icon`,
fact: `Agriculture is the main source of income for Afghans. Afghanistan is also rich in natural resources like natural gas and oil.` } 
, 
{ question : `What is the country of Buenos Aires?` ,
choice1 : `The Bahamas` ,
choice2 : `Argentina` ,
choice3 : `Algiers` ,
choice4 : `Albania` ,
answer : `Argentina` ,
icon : `assets/argentina.png` ,
alt : `Argentina flag icon`,
fact: `Argentina had 5 presidents in 10 days in 2001. It is also the eighth largest country in the world.` } 
, 
{ question : `What is the country of Vienna?` ,
choice1 : `Australia` ,
choice2 : `Austria` ,
choice3 : `Barbados` ,
choice4 : `Belgium` ,
answer : `Austria` ,
icon : `assets/austria.png` ,
alt : `Austria flag icon`,
fact: `The sewing machine was invented by Austrian Josef Madersperger.` } 
, 
{ question : `What is the country of of Sofia?` ,
choice1 : `Czech Republic` ,
choice2 : `Bulgaria` ,
choice3 : `Cyprus` ,
choice4 : `Congo` ,
answer : `Bulgaria` ,
icon : `assets/bulgaria.png` ,
alt : `Bulgaria flag icon`,
fact: `Bulgaria is one of the oldest countries in Europe. It is also the only one, which never changed its name since its establishment in 681.` } 
, 
{ question : `what is the capital of Fiji?` ,
choice1 : `Suva` ,
choice2 : `Helsinki` ,
choice3 : `Asmara` ,
choice4 : `Bangui` ,
answer : `Suva` ,
icon : `assets/fiji.png` ,
alt : `Suva flag icon`,
fact: `Fiji is composed of more than 300 islands. It was also once under British rule.` } 
, 
{ question : `What is the capital of Ghana?` ,
choice1 : `Tbilisi` ,
choice2 : `Suva` ,
choice3 : `Addis` ,
choice4 : `Accra` ,
answer : `Accra` ,
icon : `assets/ghana.png` ,
alt : `Ghana flag icon`,
fact: `Ghana was ranked as Africa's most peaceful country by the Global Peace Index.` }
,
{ question : `What is the capital of North Korea?` ,
choice1 : `Pyongyang` ,
choice2 : `Tokyo` ,
choice3 : `Nairobi` ,
choice4 : `Seoul` ,
answer : `Pyongyang` ,
icon : `assets/north-korea.png` ,
alt : `North Korea flag icon`,
fact: `North Korea has mandatory military service for both men and women.` } 
,
{ question : `What is the capital of Morocco?` ,
choice1 : `Riyadh` ,
choice2 : `Muscat` ,
choice3 : `Rabat` ,
choice4 : `Warsaw` ,
answer : `Rabat` ,
icon : `assets/morocco.png` ,
alt : `Moroccan flag icon`,
fact: `The most well-known Moroccan food is couscous, a dish typically eaten on the Islamic holy day. It is also one of the world’s largest producers of illicit hashish which is a potent form of cannabis. | It was the first nation to sign a treaty with the United States in 1786.` } 

]


// See bottom of document to start at event handlers.

let questionNumber = 0;
let questionsAnswered = 0;
let score = 0;


function displayQuizProgress() {
  // this shows the score questionnumber and how many questions answered
  $(".quiz-progress-list").html(
  `<li>Question: <span class="current-question-counter">${questionNumber}</span>/${STORE.length}
  </li>
   <li>Correct: <span class="current-score-counter">${score}</span>/<span class="question-answered-counter">${questionsAnswered}</span>
   </li>`);
}

function makeSectionInvisible(section) {
  // Make section invisible by applying CSS class with display:none
  $(section).addClass("hidden");
}

function makeSectionVisible(section) {
  // Makes section visible to user by removing class with display:none
  $(section).removeClass("hidden");
}

function updateQuestionNumber() {
  // Increments the questionNumber and updates quiz progress
  questionNumber ++;
  displayQuizProgress()
}

function updateAnsweredQuestion() {
  // Increments the questionsAnswered and updates quiz progress
  questionsAnswered ++;
  displayQuizProgress()
}

function updateScore() {
  // Increments the score and updates quiz progress
  score ++;
  displayQuizProgress()
}


function displayQuestion() {
  // shows the question section
  $(".questions-section").html(
    
    `

    
    <h2 class="question question${questionNumber}">
      Question : ${STORE[questionNumber - 1].question}
    </h2>
        
    <form class="submit-choice-form" role="form">
    
      <fieldset role="radiogroup">
        <label for="choice1" class="choice">
        <input type="radio" name="choice" id="choice1" value="choice1" role="radio" required> <span>${STORE[questionNumber - 1].choice1}</span>
        </label>
          
        <label for="choice2" class="choice">
        <input type="radio" name="choice" id="choice2" value="choice2" role="radio" required> <span>${STORE[questionNumber - 1].choice2}</span>
        </label>
          
        <label for="choice3" class="choice">
        <input type="radio" name="choice" id="choice3" value="choice3" role="radio" required><span>${STORE[questionNumber - 1].choice3}</span>
        </label>

        <label for="choice4" class="choice">
        <input type="radio" name="choice" id="choice4" value="choice4" role="radio" required> <span>${STORE[questionNumber - 1].choice4}</span>
        </label>
      </fieldset>
      
      <div class="button-container">
        <button type="submit" class="submit-choice-button" role="button">... Submit ...</button>
      </div>
      
    </form>`
    );
}

function runQuestion() {
  // Update question number makes question section visible and shows question
  updateQuestionNumber();
  makeSectionVisible(".questions-section")
  displayQuestion();
}

function handleStartButton() {
  // Wehn start button is clicked hides the welcome section and shows the questions
  $(".welcome-section").on("click", ".start-quiz-button", function() {
    makeSectionInvisible(".welcome-section");
    runQuestion();
  });
}


function getChosenAnswer() {
  // gets the chosen answer
  const choiceAlias = $(".questions-section").find("input:checked").val();
  const chosenAnswer = STORE[questionNumber - 1][choiceAlias];
  return chosenAnswer.trim();
}

function getRightAnswer() {
  // gets the right answer for the question
  const rightAnswer = STORE[questionNumber - 1].answer;
  return rightAnswer.trim();
}

function checkAnswer() {
  // checks choice with the correct answer
  const chosenAnswer = getChosenAnswer();
  const rightAnswer = getRightAnswer();
  return chosenAnswer === rightAnswer;
}

function questionReply(isAnswerRight) {
  // show reply section
  $(".reply-section").html(`
    <img src="${STORE[questionNumber - 1].icon}" alt="${STORE[questionNumber - 1].alt}" class="icon icon-quiz-left">
    <img src="${STORE[questionNumber - 1].icon}" alt="${STORE[questionNumber - 1].alt}" class="icon icon-quiz-right">
    
    <h2 class="choice-dependent-text">
    ${isAnswerRight ? `Correct ^_^` : `Wrong Answer .-.`}
    </h2>
    
    <p> Right answer : ${STORE[questionNumber - 1].answer} </p>
    
    <p class="correct-answer"> Fun fact : ${STORE[questionNumber - 1].fact}</p>
    
    <div class="button-container">
      <button class="next-question-button" role="button">
      ${ questionsAnswered !== STORE.length ? "Next Question" : "See Results"}
      </button>
    </div>`
    );
}

function sendReply(isAnswerRight) {
  // Updates answered question and the score. also removes hidden class from reply section
  updateAnsweredQuestion();
  if (isAnswerRight) {
    updateScore();
  }
  makeSectionVisible(".reply-section")
  questionReply(isAnswerRight);
}

function handleSubmitButton() {
  // when choice is selected it stores the choice and hides the question section Then runs the reply section
  $(".questions-section").on("submit", function(event) {
    event.preventDefault();
    const isAnswerRight = checkAnswer();
    makeSectionInvisible(".questions-section");
    sendReply(isAnswerRight);
  });
}


function showResults() {
  // shows the results section
  $(".results-section").html(
    `<h2 class="results-dependent-text">
      ${score < 4 ? "Uhh, better luck next time." : ( score >= 4 && score < 7 ? "Well done!" : "Wow!! You did amazing!") 
      }
    </h2>
    <p>You got <span class="results-score-display">${score} out of ${STORE.length}</span> questions correct!</p>
    <p>Thank you for taking the Quiz.</p>
    <div class="button-container">
      <button class="restart-quiz-button" role="button">Restart!</button>
    </div>`);
}

function runResults() {
  // Removes hidden class from results section and shows it
  makeSectionVisible(".results-section");
  showResults();
}

function handleNextButton() {
  // when the button is clicked on the reply section. its going to remove it and try to move to next question or result page
  $(".reply-section").on("click", ".next-question-button", function() {
    makeSectionInvisible(".reply-section");
    if (questionsAnswered !== STORE.length) {
      runQuestion();
    } else {
      runResults();
    }
  });
}

// restarting

function resetProgress() {
  //Resets the global values
  questionNumber = 0;
  questionsAnswered = 0;
  score = 0;
  displayQuizProgress();
}

function displayWelcome() {
  // shows the welcome section
  $(".welcome-section").html(
    `<h2>
      Welcome to the Countries & Capitals Quiz!!
    </h2>
    
    <p> Test your knowledge by matching the correct countries to their capitals and vice versa! 
    </p>
    
    <p>
      Best of luck!!
    </p>
    
    <div class="button-container">
      <button class="start-quiz-button" role="button" >Begin!</button>
    </div>`
  );
}

function runIntro() {
  // Removes hidden class from welcome section to show it
  resetProgress();
  makeSectionVisible(".welcome-section");
  displayWelcome();
}

function handleRestartButton() {
  // On button click in results section, hides the results section, moves back to intro section. Resets globals
  $(".results-section").on("click", ".restart-quiz-button", function() {
    makeSectionInvisible(".results-section");
    runIntro();
  })
}


// Event handlers 

function handleQuiz() {
  runIntro();
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
  handleRestartButton();
}

$(handleQuiz);
