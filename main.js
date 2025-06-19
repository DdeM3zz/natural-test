const questions = [
  {
    question: "1. Вы любите мужчин?",
    answers: [
      { text: "Да", value: 0 },
      { text: "Нет", value: 2 }
    ]
  },
  {
    question: "2. Ваше имя Дима?",
    answers: [
      { text: "Да", value: 2 },
      { text: "Нет", value: 0 }
    ]
  },
  {
    question: "3. Сколько пальцев у вас?",
    answers: [
      { text: "10", value: 2 },
      { text: "Меньше", value: 1 },
      { text: "Больше", value: 0 }
    ]
  },
  {
    question: "4. Любите котиков?",
    answers: [
      { text: "Да", value: 0 },
      { text: "Нет", value: 2 }
    ]
  },
  {
    question: "5. Вы смотрите аниме?",
    answers: [
      { text: "Да, много", value: 2 },
      { text: "Иногда", value: 1 },
      { text: "Нет", value: 0 }
    ]
  }
];

let currentQuestionIndex = 0;
let score = 0;
let adShown = false;

function showQuestion() {
  const container = document.getElementById('question-container');
  const question = questions[currentQuestionIndex];

  if (!adShown && currentQuestionIndex === 2) {
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
  if (currentQuestionIndex >= 2 && !skipBtn.classList.contains("visible")) {
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

  if (score <= 5) {
    resultText = "🔥 Вы натурал до мозга костей!";
  } else if (score <= 10) {
    resultText = "Есть подозрения... но возможно всё ещё можно исправить.";
  } else {
    resultText = "Мемасик, вы не натурал! 🎉";
  }

  document.getElementById("quiz-container").innerHTML = `
    <h2>Тест завершён!</h2>
    <h3>${resultText}</h3>
    <button onclick="location.reload()">Пройти снова</button>
  `;
}

// Запускаем тест
showQuestion();
