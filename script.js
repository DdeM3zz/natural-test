const questions = [
  {
    question: "1. Вы любите мужчин?",
    answers: [
      { text: "Да", value: 0 },
      { text: "Нет", value: 2 },
      { text: "Не определился", value: 1 }
    ]
  },
  {
    question: "2. Сколько пальцев у вас?",
    answers: [
      { text: "10", value: 2 },
      { text: "Меньше", value: 1 },
      { text: "Больше", value: 0 }
    ]
  },
  {
    question: "3. Любите котиков?",
    answers: [
      { text: "Да", value: 0 },
      { text: "Нет", value: 2 }
    ]
  },
  {
    question: "4. Вы смотрите аниме?",
    answers: [
      { text: "Да, много", value: 2 },
      { text: "Иногда", value: 1 },
      { text: "Нет", value: 0 }
    ]
  },
  {
    question: "5. Кто такой натурал?",
    answers: [
      { text: "Тот, кто любит всех", value: 0 },
      { text: "Это я", value: 2 },
      { text: "Не знаю", value: 1 }
    ]
  },
  {
    question: "6. Вы когда-нибудь плакали от мемов?",
    answers: [
      { text: "Да", value: 2 },
      { text: "Иногда", value: 1 },
      { text: "Нет", value: 0 }
    ]
  }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function checkName() {
  const name = document.getElementById('user-name').value.trim();
  if (name.toLowerCase() === 'дима') {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  } else {
    document.getElementById('name-form-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    showQuestion();
  }
}

function showQuestion() {
  const container = document.getElementById('question-container');
  const question = questions[currentQuestionIndex];

  container.innerHTML = `
    <div class="question-box">
      <h2>${question.question}</h2>
      ${question.answers.map((ans, i) => `
        <label>
          <input type="radio" name="answer" value="${ans.value}" ${userAnswers[currentQuestionIndex] == ans.value ? 'checked' : ''}>
          ${ans.text}
        </label><br>
      `).join('')}
    </div>
  `;

  updateButtons();
  updateProgress();
}

function nextQuestion() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected && currentQuestionIndex < questions.length) return alert("Выберите вариант!");

  userAnswers[currentQuestionIndex] = parseInt(selected.value);
  score += userAnswers[currentQuestionIndex];

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showResult();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

function updateButtons() {
  document.getElementById('btn-prev').style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
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
  document.getElementById('quiz-form').classList.add('hidden');

  const resultDiv = document.getElementById('result');
  const resultText = document.getElementById('result-text');

  let result = '';

  if (score <= 4) {
    result = 'Вы натурал до мозга костей!';
  } else if (score <= 7) {
    result = 'Есть подозрения... но возможно всё ещё можно исправить.';
  } else if (score <= 10) {
    result = 'Мемасик, вы не натурал! 🎉';
  } else {
    result = 'Вы — ходячий мем, братан. 😂';
  }

  resultText.textContent = result;
  resultDiv.classList.remove('hidden');
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  document.getElementById('result').classList.add('hidden');
  document.getElementById('quiz-form').classList.remove('hidden');
  showQuestion();
}
