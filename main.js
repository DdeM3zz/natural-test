import questions from './questions.js';

let currentQuestionIndex = 0;
let score = 0;
let adShown = false;

function showQuestion() {
  const container = document.getElementById('question-container');
  const question = questions[currentQuestionIndex];

  if (!adShown && currentQuestionIndex === 15) {
    showAd();
    adShown = true;
  }

  container.innerHTML = `
    <div class="question-box">
      <h2>${question.question}</h2>
      ${question.answers.map((ans, idx) => `
        <button class="answer-button" onclick="selectAnswer(${ans.value})">${ans.text}</button>
      `).join('')}
    </div>
  `;

  updateProgress();

  const skipBtn = document.getElementById("skip-btn");
  if (currentQuestionIndex >= 10 && !skipBtn.classList.contains("visible")) {
    skipBtn.classList.add("visible");
  }
}

function selectAnswer(value) {
  score += value;

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showResult();
  }
}

function skipTest() {
  if (confirm("Вы уверены, что хотите пропустить тест?")) {
    showResult();
  }
}

function showAd() {
  const adBanner = document.getElementById("ad-banner");
  adBanner.innerHTML = `
    <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Аркадий 100 метров от вас желает познакомиться!</a></p>
    <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Моторное масло Хуй Энерджи: стоять будет до расвета!</a></p>
    <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Бесплатные Робуксы! Кликай скорее!</a></p>
  `;
  adBanner.classList.remove("hidden");
}

function updateProgress() {
  const progress = Math.round((currentQuestionIndex / questions.length) * 100);
  const bar = document.createElement('div');
  bar.id = 'progress';
  bar.style.width = progress + '%';
  document.getElementById('progress-bar').innerHTML = '';
  document.getElementById('progress-bar').appendChild(bar);
}

function showResult() {
  let resultText = '';

  if (score <= 50) {
    resultText = "🔥 Вы натурал до мозга костей!";
  } else if (score <= 100) {
    resultText = "Есть подозрения... но возможно всё ещё можно исправить.";
  } else if (score <= 150) {
    resultText = "Мемасик, вы не натурал! 🎉";
  } else {
    resultText = "Вы — ходячий мем, братан. 😂";
  }

  document.getElementById("quiz-container").innerHTML = `
    <h2>Тест завершён!</h2>
    <h3>${resultText}</h3>
    <button onclick="location.reload()">Пройти снова</button>
  `;
}

showQuestion();
