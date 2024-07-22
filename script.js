let scores, currentScore, activePlayer, gamePlaying;

function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  
  document.querySelector('.dice#dice-1').style.display = 'none';
  document.querySelector('.dice#dice-2').style.display = 'none';

  document.querySelector('.name#name-0').textContent = 'Player 1';
  document.querySelector('.name#name-1').textContent = 'Player 2';

  document.querySelector('.player-0').classList.remove('active');
  document.querySelector('.player-1').classList.remove('active');
  document.querySelector('.player-0').classList.add('active');
}

function switchPlayer() {
  document.getElementById('current-' + activePlayer).textContent = '0';
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  document.querySelector('.player-0').classList.toggle('active');
  document.querySelector('.player-1').classList.toggle('active');
}

document.querySelector('.btn-roll').addEventListener('click', function() {
  if(gamePlaying) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    
    document.querySelector('#dice-1').style.display = 'block';
    document.querySelector('#dice-1').src = 'image/dice-' + dice1 + '.png';
    document.querySelector('#dice-2').style.display = 'block';
    document.querySelector('#dice-2').src = 'image/dice-' + dice2 + '.png';

    if (dice1 !== 1 && dice2 !== 1) {
      currentScore += dice1 + dice2;
      document.getElementById('current-' + activePlayer).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if(gamePlaying) {
    scores[activePlayer] += currentScore;

    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document.querySelector('.name#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice#dice-1').style.display = 'none';
      document.querySelector('.dice#dice-2').style.display = 'none';
      gamePlaying = false;
    } else {
      switchPlayer();
    }
  }
});

document.querySelector('.btn-new').addEventListener('click', init);

init();
