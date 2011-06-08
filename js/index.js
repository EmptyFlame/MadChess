function setBoard() {
    if(!allset){
        var piece;
        var assembler;
        for(piece in chessSet){
            assembler = $('<div id="'+piece+'" class="'+chessSet[piece].role+' '+chessSet[piece].team+'"></div>');
        }
        allset = true;
    }
}

function movePiece(victim, x, y){
    var target = $('#chessBoard tr:nth-child('+y+') td:nth-child('+x+')');
    victim.appendTo(target);
}