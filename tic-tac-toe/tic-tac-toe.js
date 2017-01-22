/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/

	function ticTacToe(board){
		if(board.indexOf(0)){
			return -1 ;
		}
		for (var i = 0 ; i < board.length; i++) {
			var sum =0 ;
			for(var j = 0 ; j < i.length ; j++){
			sum+= board[i][j];
		};
		if(sum === 3){
			return 1
		}else if(board===-3){
			return 2
		}
		var csum=0
		for(var i = 0; i<3;i++){
			csum+=board[i][j] 
	}
	if(csum === 3){
		return 1
	}else if(csum === -3){
		return 2
	}
}
