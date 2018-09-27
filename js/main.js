//start of Tic-tac-toe
//--global variables---//
//player counter variables
let player1 = "X";
let player2 = "O";
//gameOver boolean value
let gameOver = false;
//moves counter variable
let moves = 0;
//currentPlayer
let currentPlayer = player1;
//score counter variables
let scoreX = 0;
let scoreO = 0;
//leaderboard array to track positions
let board = [
  1, 2, 3,
  4, 5, 6,
  7 ,8, 9,
];

//All possible combinations function **REFACTOR**
const winning  = function (currentPlayer){

  if(
    //check if rows win
    ( board[0] === (currentPlayer) && board[1] === (currentPlayer) && board[2] === (currentPlayer) ) ||
    ( board[3] === (currentPlayer) && board[4] === (currentPlayer) && board[5] === (currentPlayer) ) ||
    ( board[6] === (currentPlayer) && board[7] === (currentPlayer) && board[8] === (currentPlayer) ) ||
    //check if column wins
    ( board[0] === (currentPlayer) && board[3] === (currentPlayer) && board[6] === (currentPlayer) ) ||
    ( board[1] === (currentPlayer) && board[4] === (currentPlayer) && board[7] === (currentPlayer) ) ||
    ( board[2] === (currentPlayer) && board[5] === (currentPlayer) && board[8] === (currentPlayer) ) ||
    // check if diagonal left wins
    ( board[0] === (currentPlayer) && board[4] === (currentPlayer) && board[8] === (currentPlayer) ) ||
    //check if diagonal right wins
    ( board[2] === (currentPlayer) && board[4] === (currentPlayer) && board[6] === (currentPlayer) )

    )
    {

      gameOver = true;
      return currentPlayer;
      // Returns the current player which is called back in the on click handler

    };
  };

//check for draw
//If draw returns true Jquery is then called in the on click handler.

const checkForDraw = function (){
  if (moves >=9) {
  
    return true;


  }
};

/////////////---------jQuery---------////////////
$('.box').on("click",function(){

  //Gets the id from each box
  let boxId = $(this).attr("id");


  //update board via id (which is also the index of array)
  //assign currentPlayer to the board[boxId]
  board[boxId] = currentPlayer;
  // console.log(board);

  const contents = $(this).text();
  if( contents.length > 0 || gameOver){
  // return early from this click handler function if the clikced square is occupied
    // i.e. don't run any of the rest of the code in this function which plays the move
    return;
  }



  //audio played when square is clicked.
  $('audio#pop')[0].play()


  //ads to move counter in global variable for the check for draw function.
  moves++;

  // if all squares are flled make sure the last move checks for a win.
  if (gameOver === false){
    checkForDraw
  }
  //if draw is true then Jquery activates following conditions.
  let isDraw = checkForDraw();
  if (isDraw) {
    $('h1').text(` IT'S A TIE!`);
    $('audio#death')[0].play();
    $('.test').show();
    $('.box').hide();
    $('h3').hide();
  }

  //variable stored for jQuery to be activated after a win/tie has been checked
  let winner = winning(currentPlayer);
  //condition to activate jQuery once a condition is met.
  if (winner) {

    if (winner === "X") {
      scoreX ++
      console.log(scoreX);
      $("#scoreX").text(`Player X Score: ${scoreX}`)
    } else {
      scoreO ++
      console.log(scoreO);
      $("#scoreO").text(`Player O Score: ${scoreO}`)
    }


    $('h1').text(`${currentPlayer} wins!`);
    $('h3').hide()
    $('audio#death')[0].play()
    $('.test').show();
    $('.box').hide();
  }


  $('.gameOver').hide();

  //check to see which div is clicked.
  $(this).text(currentPlayer);

  //condition to toggle players.
  if (currentPlayer === player1 ) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;

  }
// working
  $('h3').text(`Players Turn :  ${currentPlayer}`);
  // $('h3').css('background-color','red');


//

});  // end of click handler
