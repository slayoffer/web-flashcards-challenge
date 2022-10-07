const URL = 'http://localhost:7777';

const $questionsContainer = document.querySelector('#questions-container');

const $resultPara = document.createElement('p');
$resultPara.classList.add('mt-4', 'p-3', 'bg-warning', 'result-para');

const $returnDiv = document.createElement('div');
const $returnBtn = document.createElement('button');
const $returnLink = document.createElement('a');

$returnLink.classList.add('text-decoration-none', 'text-reset');
$returnLink.textContent = 'Вернуться';
$returnBtn.classList.add('btn', 'btn-success', 'mb-2', 'mt-2');
$returnDiv.classList.add('w-75', 'd-flex', 'flex-column', 'align-items-center', 'mx-auto');
$returnBtn.insertAdjacentElement('afterbegin', $returnLink);
$returnDiv.insertAdjacentElement('afterbegin', $resultPara);
$returnDiv.insertAdjacentElement('beforeend', $returnBtn);

let correctAnswers = 0;
let clicks = 0;

$questionsContainer?.addEventListener('click', async (e) => {
  e.preventDefault();

  if (e.target.tagName === 'BUTTON' && e.target.hasAttribute('data-id')) {
    clicks += 1;

    const cardID = e.target.dataset.id;
    const { userAnswer } = Object.fromEntries(new FormData(e.target.parentElement));

    const body = JSON.stringify({ cardID });

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    };

    const response = await fetch(`${URL}/check`, options);
    const { card, user } = await response.json();

    const { deck_id } = card;
    const { id } = user;

    const $para = document.createElement('p');
    $para.classList.add('mb-2', 'result');

    const $questionContainer = $questionsContainer.querySelector(`[data-id="${cardID}"]`);

    $returnLink.href = `/home/${id}`;

    if (userAnswer.toLowerCase() === card.answer) {
      correctAnswers += 1;

      $para.innerText = 'Верно!';
      $para.classList.add('bg-success');
      $questionContainer.insertAdjacentElement('beforeend', $para);
    } else {
      $para.innerText = 'Неверно!';
      $para.classList.add('bg-danger');
      $questionContainer.insertAdjacentElement('beforeend', $para);
    }

    e.target.remove();

    if (clicks === 5) {
      if (correctAnswers === 0) {
        $resultPara.innerText = `Ты набрал ${correctAnswers} баллов из 5 :( Не расстраивайся, такое иногда случается`;
      } else if (correctAnswers === 1) {
        $resultPara.innerText = `Ты набрал ${correctAnswers} балл из 5. Мы тоже считаем, что Бетмен хорош`;
      } else if (correctAnswers === 2 || correctAnswers === 3 || correctAnswers === 4) {
        $resultPara.innerText = `Ты набрал ${correctAnswers} балла из 5. Нет предела совершенству!`;
      } else {
        $resultPara.innerText = `Ты набрал ${correctAnswers} баллов из 5! Супер, молодец!`;
      }
      $questionsContainer.insertAdjacentElement('afterend', $returnDiv);

      const sendData = {
        deck_id,
        user_id: id,
        score: correctAnswers,
      };

      const body = JSON.stringify(sendData);

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      };

      await fetch(`${URL}/result`, options);
    }
  }
});
