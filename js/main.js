console.log("up and running!")

let player1 = "X";
let player2 = "O";
let gameOver = false;
let moves = 0;
let currentPlayer = player1;
let scoreX = 0;
let scoreO = 0;
  //test

let board = [
  1, 2, 3,
  4, 5, 6,
  7 ,8, 9,
];




const winning  = function (currentPlayer){

  if( // check if rows wins
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

      $('h1').text(`${currentPlayer} wins!`);



      $('h3').hide()
      $('audio#death')[0].play()
      $('.test').show();
      $('.box').hide();

      gameOver = true;




    };
  };

//check for draw *****
const checkForDraw = function (){
  if (moves >=9) {
    $('h1').text(` IT'S A TIE!`);
    $('audio#death')[0].play()
    $('.test').show();
    $('.box').hide();

  }
};

/////////////---------jQuery---------////////////
$('.box').on("click",function(){

  //get id from each box, which is a number
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





  $('audio#pop')[0].play()



  //moves for draw
  moves++;

  // Make sure last player does not equal a tie for a win
  if (gameOver === false){
    checkForDraw
  }
  checkForDraw();

  winning(currentPlayer);


  $('.gameOver').hide();

  $(this).text(currentPlayer);

  if (currentPlayer === player1 ) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;

  }
// working
  $('h3').text(`Players Turn :  ${currentPlayer}`);
  // $('h3').css('background-color','red');
});  // end of click handler
