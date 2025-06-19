const questions = [
  {
    question: "1. Вы любите мужчин?",
    answers: [{ text: "Да", value: 0 }, { text: "Нет", value: 2 }]
  },
  {
    question: "2. Ваше имя Дима?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "3. Сколько пальцев у вас?",
    answers: [{ text: "10", value: 2 }, { text: "Меньше", value: 1 }, { text: "Больше", value: 0 }]
  },
  {
    question: "4. Любите котиков?",
    answers: [{ text: "Да", value: 0 }, { text: "Нет", value: 2 }]
  },
  {
    question: "5. Вы смотрите аниме?",
    answers: [{ text: "Да, много", value: 2 }, { text: "Иногда", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "6. Кто такой натурал?",
    answers: [{ text: "Тот, кто любит всех", value: 0 }, { text: "Это я", value: 2 }, { text: "Не знаю", value: 1 }]
  },
  {
    question: "7. Вы когда-нибудь плакали от мемов?",
    answers: [{ text: "Да", value: 2 }, { text: "Иногда", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "8. У вас есть геймпад?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "9. Вы верите в дружбу между парнем и девушкой?",
    answers: [{ text: "Нет", value: 2 }, { text: "Возможно", value: 1 }, { text: "Да, конечно", value: 0 }]
  },
  {
    question: "10. Как часто вы чистите зубы?",
    answers: [{ text: "Каждый день", value: 0 }, { text: "Иногда", value: 1 }, { text: "Никогда", value: 2 }]
  },

  // 11–100 уникальных вопросов
  {
    question: "11. Пиво или водка?",
    answers: [{ text: "Пиво", value: 1 }, { text: "Водка", value: 0 }]
  },
  {
    question: "12. Танки или тетрис?",
    answers: [{ text: "Танки", value: 0 }, { text: "Тетрис", value: 2 }]
  },
  {
    question: "13. Взрослые пазлы или Lego?",
    answers: [{ text: "Пазлы", value: 1 }, { text: "Lego", value: 2 }]
  },
  {
    question: "14. Вы любите борщ?",
    answers: [{ text: "Да", value: 0 }, { text: "Нет", value: 2 }]
  },
  {
    question: "15. Вы смеётесь над шутками про Шрека?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "16. Мемы про маминого сынулю смешные?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "17. Вы играете в Roblox?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "18. Бесплатные Робуксы были бы полезны?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "19. Вы знаете, что такое TikTok?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "20. Вы любите музыку из рекламы 2000-х?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "21. Вы умеете танцевать?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "22. Вы делаете зарядку каждое утро?",
    answers: [{ text: "Да", value: 0 }, { text: "Нет", value: 2 }]
  },
  {
    question: "23. Вы любите ходить босиком?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "24. Вы смотрите сериалы?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "25. Вы верите в инопланетян?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "26. Вы любите делать селфи?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "27. Вы носите шапку даже летом?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "28. Вы следите за модой?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "29. Вы слушаете попсу?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "30. Вы верите в гороскопы?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "31. Вы любите жевать ручку?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "32. Вы боитесь пауков?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "33. Вы любите фильмы ужасов?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "34. Вы смотрите YouTube каждый день?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "35. Вы используете Discord?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "36. Вы пишете сообщения с ошибками?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "37. Вы любите петь в душе?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "38. Вы смотрите мемы перед сном?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "39. Вы любите сплетни?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "40. Вы любите лазить по крышам?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "41. Вы умеете готовить?",
    answers: [{ text: "Да", value: 0 }, { text: "Нет", value: 2 }]
  },
  {
    question: "42. Вы моете посуду после еды?",
    answers: [{ text: "Да", value: 0 }, { text: "Нет", value: 2 }]
  },
  {
    question: "43. Вы любите караоке?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "44. Вы смотрите реалити-шоу?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "45. Вы играете в мобильные игры?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "46. Вы любите кататься на велосипеде?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "47. Вы делаете домашнее задание заранее?",
    answers: [{ text: "Да", value: 0 }, { text: "Нет", value: 2 }]
  },
  {
    question: "48. Вы смотрите мультфильмы для взрослых?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "49. Вы любите фотографировать еду?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "50. Вы любите селфи с животными?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "51. Вы любите быть в центре внимания?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "52. Вы любите петь в караоке с друзьями?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "53. Вы любите делать подарки?",
    answers: [{ text: "Да", value: 0 }, { text: "Нет", value: 2 }]
  },
  {
    question: "54. Вы любите получать подарки?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "55. Вы верите в судьбу?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "56. Вы верите в любовь с первого взгляда?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "57. Вы верите в предзнаменования?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "58. Вы верите в приметы?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "59. Вы верите в привидений?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "60. Вы боитесь темноты?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "61. Вы любите зиму?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "62. Вы любите лето?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "63. Вы любите осень?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "64. Вы любите весну?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "65. Вы любите кошек больше, чем людей?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "66. Вы любите собак больше, чем людей?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "67. Вы любите птиц?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "68. Вы любите рыбок?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "69. Вы любите экстрим?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "70. Вы любите острые ощущения?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "71. Вы любите страшные аттракционы?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "72. Вы любите кататься на американских горках?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "73. Вы любите кататься на колесе обозрения?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "74. Вы любите кататься на каруселях?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "75. Вы любите кататься на катке?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "76. Вы любите кататься на роликах?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "77. Вы любите кататься на скейте?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "78. Вы любите кататься на велосипеде?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "79. Вы любите кататься на самокате?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "80. Вы любите кататься на лыжах?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "81. Вы любите кататься на сноуборде?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "82. Вы любите кататься на санках?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "83. Вы любите кататься на коньках?",
    answers: [{ text: "Да", value: 1 }, { text: "Нет", value: 0 }]
  },
  {
    question: "84. Вы любите кататься на пони?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "85. Вы любите кататься на пони виртуально?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "86. Вы любите кататься на пони в реале?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "87. Вы любите кататься на пони в Minecraft?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "88. Вы любите кататься на пони в GTA?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "89. Вы любите кататься на пони в VR?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "90. Вы любите кататься на пони в кино?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "91. Вы любите кататься на пони в жизни?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "92. Вы любите кататься на пони в мыслях?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "93. Вы любите кататься на пони в интернете?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "94. Вы любите кататься на пони в соцсетях?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "95. Вы любите кататься на пони в мемах?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "96. Вы любите кататься на пони в голове?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "97. Вы любите кататься на пони в майнкрафте?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "98. Вы любите кататься на пони в Roblox?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "99. Вы любите кататься на пони в FiveM?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  },
  {
    question: "100. Вы любите кататься на пони в любом виде?",
    answers: [{ text: "Да", value: 2 }, { text: "Нет", value: 0 }]
  }
];

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
    <button onclick="location.reload()" class="restart-button">Пройти снова</button>
  `;
}

showQuestion();
