'use strict';

// SELECTING ELEMENTS
const playert0El = document.querySelector('.player--0');
const playert1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
///////////////////////////////////////   # is a selector for id
////////////////////////////////////      for Class is used dot .
const score1El = document.getElementById('score--1');
//// this 2 commands is are doing the same
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//Starting conditions

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  playert0El.classList.remove('player--winner');
  playert1El.classList.remove('player--winner');
  playert0El.classList.add('player--active');
  playert1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playert0El.classList.toggle('player--active');
  playert1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1/ Generating Random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2 Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3 check the rolled 1: if true switch to next player
    if (dice !== 1) {
      //add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add current sore to the active player score
    scores[activePlayer] += currentScore;

    //scores[1] = scores[1]+ currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. check if player score is>=100
    if (scores[activePlayer] >= 20) {
      // finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
    //if not switch to the next player
  }
});

btnNew.addEventListener('click', init);
