var scores, roundScores, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
  if ( gamePlaying ) {
    var number = Math.floor(Math.random() * 10 ) + 1;
  
    document.querySelector('.number').style.display = 'block';
    document.querySelector('.number').innerHTML = number;
 
    if ( number !== 1 && number !== 5 ) {
      // Set current box = roundScore 
      roundScores += number;
      document.querySelector('#current-' + activePlayer).textContent = roundScores;
    } else {
    // Next Player
      nextPlayer();
    }
  }
})

document.querySelector('.btn-hold').addEventListener('click', function () {
  if ( gamePlaying ) {
    scores[activePlayer] += roundScores;
    // Update the interface
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // Check if it wins
    if ( scores[activePlayer] >= 30 ) {
      document.querySelector('#name-' + activePlayer).textContent = 'you win!';
      document.querySelector('#name-' + activePlayer).classList.add('winner-font');
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      gamePlaying = false;
    //document.getElementById('current-' + activePlayer ).textContent = '0';
      } else {
      // Next Player
      nextPlayer();
  }
  }
})

function nextPlayer () {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScores = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  
  // active class
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0,0];
  roundScores = 0;
  activePlayer = 0;
  gamePlaying = true;
  
  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';
  
  document.querySelector('#name-0').classList.remove('winner-font');
  document.querySelector('#name-1').classList.remove('winner-font');
  
  document.querySelector('#score-0').textContent = '0';
  document.querySelector('#score-1').textContent = '0';
  
  document.querySelector('#current-0').textContent = '0';
  document.querySelector('#current-1').textContent = '0';
  
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  
  document.querySelector('.number').textContent = '0';
  
  document.querySelector('.player-0-panel').classList.add('active');
}
