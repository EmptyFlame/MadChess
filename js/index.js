//This function sets the board
function setBoard() {
    if(!allSet){
        var piece;
        var assembler;
        for(piece in chessSet){
            assembler = $('<div id="'+piece+'" class="'+chessSet[piece].role+' '+chessSet[piece].team+'"></div>');
            movePiece(assembler, chessSet[piece].position.x, chessSet[piece].position.y);
        }
        allSet = true;
    }
}
//This function will moove the chess piece to desired coordinates (in the coordinate system of a chess board - #chessBoard)
function movePiece(victim, x, y){
    var target = $('#chessBoard tr:nth-child('+y+') td:nth-child('+x+')');
    victim.appendTo(target);
}