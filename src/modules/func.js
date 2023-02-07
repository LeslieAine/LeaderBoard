const recentScoresList = document.querySelector('.recent-scores-list');
const inputName = document.querySelector('input[name="name"]');
const inputScore = document.querySelector('input[name="score"]');

const score1 = { user: 'Leslie', score: 332 };
const score2 = { user: 'Leslie', score: 332 };

const refreshScores = () => {
  const scores = [
    {
      user: score1.user,
      score: score1.score,
    },
    {
      user: score2.user,
      score: score2.score,
    },

  ];

  recentScoresList.innerHTML = '';

  scores.result.forEach((score) => {
    const li = document.createElement('li');
    li.classList.add('recent-score');
    li.innerHTML = `${score.user}: ${score.score}`;
    recentScoresList.appendChild(li);
  });

  // reset input fields
  inputName.value = '';
  inputScore.value = '';
};

export default refreshScores;