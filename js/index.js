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

//This function will move the chess piece to desired coordinates (in the coordinate system of a chess board - #chessBoard)
function movePiece(victim, x, y){
    var target = $('#chessBoard tr:nth-child('+y+') td:nth-child('+x+')');
    victim.appendTo(target);
    if(allSet){
        if(chessSet[victim.attr('id')].virgin){
            chessSet[victim.attr('id')].babySteps = Math.abs(parseInt(chessSet[victim.attr('id')].position.x - x, 10));
            chessSet[victim.attr('id')].virgin = false;
        }
        chessSet[victim.attr('id')].position.x = x;
        chessSet[victim.attr('id')].position.y = y;
        
    }
}

//What to do when we click on one of fields
function whatToDo(piece){
    if(piece.length){
        //If the chess piece is from the same team (black/white)
        if((piece.attr('class').split(' ')[1] === team)&&((!($('.selected').length))||(($('.selected').length)&&($('.selected').attr('id') === piece.attr('id'))))){
           piece.toggleClass('selected');
        }
    } else {
        
    }
}