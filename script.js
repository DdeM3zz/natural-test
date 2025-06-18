const questions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = [];

// Генерируем 100 вопросов
for (let i = 1; i <= 100; i++) {
  questions.push({
    question: `Вопрос ${i}: Вы натурал?`,
    answers: [
      { text: "Да", value: 0 },
      { text: "Нет", value: 2 }
    ]
  });
}

function showQuestion() {
  const container = document.getElementById('question-container');
  const question = questions[currentQuestionIndex];

  container.innerHTML = `
    <div class="question-box">
      <h2>${question.question}</h2>
      ${question.answers.map((ans, idx) => `
        <button class="answer-button" onclick="selectAnswer(${ans.value})">${ans.text}</button>
      `).join('')}
    </div>
  `;

  updateProgress();

  if (currentQuestionIndex >= 10) {
    document.getElementById("skip-btn").classList.remove("hidden");
  }

  // Показываем рекламу каждые 5 вопросов
  if (currentQuestionIndex > 0 && currentQuestionIndex % 5 === 0) {
    document.getElementById("ad-banner").classList.remove("hidden");
  } else {
    document.getElementById("ad-banner").classList.add("hidden");
  }
}

function selectAnswer(value) {
  score += value;
  answered[currentQuestionIndex] = value;

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

  if (score <= 10) {
    resultText = "🔥 Вы натурал до мозга костей!";
  } else if (score <= 50) {
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

// Запускаем первый вопрос
showQuestion();
