function checkName() {
  const name = document.getElementById('user-name').value.trim();
  if (name.toLowerCase() === 'дима') {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  } else {
    document.getElementById('name-form-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
  }
}

function calculateResult() {
  const form = document.getElementById('quiz-form');
  const resultDiv = document.getElementById('result');
  const resultText = document.getElementById('result-text');

  let score = 0;

  for (let i = 1; i <= 7; i++) {
    const q = form['q' + i];
    for (let j = 0; j < q.length; j++) {
      if (q[j].checked) {
        score += parseInt(q[j].value);
        break;
      }
    }
  }

  let result = '';
  if (score <= 4) {
    result = 'Вы натурал до мозга костей!';
  } else if (score <= 10) {
    result = 'Есть подозрения... но возможно всё ещё можно исправить.';
  } else {
    result = 'Мемасик, вы не натурал! 🎉';
  }

  resultText.textContent = result;
  resultDiv.classList.remove('hidden');
}
