const questions = [
  { question: "1. Вы любите мужчин?", answers: [{text: "Да", value: 0}, {text: "Нет", value: 2}] },
  { question: "2. Ваше имя Дима?", answers: [{text: "Да", value: 2}, {text: "Нет", value: 0}] },
  { question: "3. Сколько пальцев у вас?", answers: [{text: "10", value: 2}, {text: "Меньше", value: 1}, {text: "Больше", value: 0}] },
  { question: "4. Любите котиков?", answers: [{text: "Да", value: 0}, {text: "Нет", value: 2}] },
  { question: "5. Вы смотрите аниме?", answers: [{text: "Да, много", value: 2}, {text: "Иногда", value: 1}, {text: "Нет", value: 0}] },
  { question: "6. Кто такой натурал?", answers: [{text: "Тот, кто любит всех", value: 0}, {text: "Это я", value: 2}, {text: "Не знаю", value: 1}] },
  { question: "7. Вы когда-нибудь плакали от мемов?", answers: [{text: "Да", value: 2}, {text: "Иногда", value: 1}, {text: "Нет", value: 0}] },
  { question: "8. У вас есть геймпад?", answers: [{text: "Да", value: 1}, {text: "Нет", value: 0}] },
  { question: "9. Вы верите в дружбу между парнем и девушкой?", answers: [{text: "Нет", value: 2}, {text: "Возможно", value: 1}, {text: "Да, конечно", value: 0}] },
  { question: "10. Как часто вы чистите зубы?", answers: [{text: "Каждый день", value: 0}, {text: "Иногда", value: 1}, {text: "Никогда", value: 2}] },
  
  // Начиная с 11-го вопроса — добавляем 90 уникальных!
  { question: "11. Вы натурал?", answers: [{text: "Да", value: 0}, {text: "Нет", value: 2}] },
  { question: "12. Вы натурал? Или просто маскируетесь?", answers: [{text: "Да", value: 0}, {text: "Нет", value: 2}] },
  { question: "13. Пиво или водка?", answers: [{text: "Пиво", value: 1}, {text: "Водка", value: 0}] },
  { question: "14. Танки или тетрис?", answers: [{text: "Танки", value: 0}, {text: "Тетрис", value: 2}] },
  { question: "15. Взрослые пазлы или Lego?", answers: [{text: "Пазлы", value: 1}, {text: "Lego", value: 2}] },
  { question: "16. Вы любите борщ?", answers: [{text: "Да", value: 0}, {text: "Нет", value: 2}] },
  { question: "17. Вы смеётесь над шутками про Шрека?", answers: [{text: "Да", value: 2}, {text: "Нет", value: 0}] },
  { question: "18. Мемы про маминого сынулю смешные?", answers: [{text: "Да", value: 2}, {text: "Нет", value: 0}] },
  { question: "19. Вы играете в Roblox?", answers: [{text: "Да", value: 2}, {text: "Нет", value: 0}] },
  { question: "20. Бесплатные Робуксы были бы полезны?", answers: [{text: "Да", value: 2}, {text: "Нет", value: 0}] },
  
  // Продолжаем до 100...
  ...Array.from({ length: 80 }, (_, i) => ({
    question: `${i + 21}. ${["Мемасик", "Любитель котиков", "Звезда TikTok", "Фанат мемов", "Очень натурал", "Подозревают в обратном", "Любит рикроллы", "Говорит 'че как'"][Math.floor(Math.random() * 8)]}?`,
    answers: [
      { text: "Да", value: Math.floor(Math.random() * 3) },
      { text: "Нет", value: Math.floor(Math.random() * 3) }
    ]
  }))
];

let currentQuestionIndex = 0;
let score = 0;
let adShown = false;

function showQuestion() {
  const container = document.getElementById('question-container');
  const question = questions[currentQuestionIndex];

  // Показываем рекламу один раз после 15 вопроса
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

  // Показываем кнопку пропуска после 10 вопроса
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

// Запускаем первый вопрос
showQuestion();
