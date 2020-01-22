const game = () => {
    let pScore = 0;
    let cScore = 0;

    //START THE GAME
    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            // para pumasok at lumabas ang intro and match
        introScreen.classList.add('fadeOut');
        match.classList.add('fadeIn');
        });
    };
    //Play match
    const playMatch = () =>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");
        
        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
              this.style.animation = '';
            });
        })
        //computer Options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(options => {
        options.addEventListener('click', function() {
        //computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        //here is where we call compare hands
       setTimeout(() =>{compareHands(this.textContent, computerChoice);

        //update image
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p'); 
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) =>{
        //update text
        const winner = document.querySelector('.winner');
        //Checking for a tie
       if(playerChoice === computerChoice){
           winner.textContent = "DRAW!"
           return;
       }
       //check for paper
       if(playerChoice === 'rock'){
           if(computerChoice === 'scissors'){
               winner.textContent = "AYE YOU LIT!"
               pScore++;
               updateScore();
               return;
           }else{
               winner.textContent = "BOO YOU SUCK!"
               cScore++;
               updateScore();
               return;
           }
       }
       // check for paper
       if(playerChoice === 'paper'){
           if(computerChoice === 'rock'){
               winner.textContent = "AYE YOU LIT!"
               pScore++;
               updateScore();
               return;
           }else{
               winner.textContent = "BOO YOU SUCK!"
               cScore++;
               updateScore();
               return;
           }
       }
       // check for scissors
       if(playerChoice === 'scissors'){
           if(computerChoice === 'paper'){
               winner.textContent = "AYE YOU LIT!"
               pScore++;
               updateScore();
               return;
               
           }else{
               winner.textContent = "BOO YOU SUCK!"
               cScore++;
               updateScore();
               return;
           }
       }

    };
    // tawagin lahat ng inner function
    startGame();
    playMatch();
    };

    // start ng game function
    game();