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
function whatToDo(target){
    var piece = target.find('div');
    if(piece.length){
        //If the chess piece is from the same team (black/white)
        if((piece.attr('class').split(' ')[1] === team)&&((!($('.selected').length))||(($('.selected').length)&&($('.selected').attr('id') === piece.attr('id'))))){
           piece.toggleClass('selected');
        }
    } else {
        //Move to an empty field
        if(itsLegal(target, "move")){
            movePiece($('.selected'),target.closest('td').index() + 1,target.closest('tr').index() + 1);
        }
    }
}

//Function that chooses what rule should be checked according to a role of a figure
function itsLegal(target, action){
    var selected = chessSet[$('.selected').attr('id')];
    switch(selected.role){
        case "pawn":
            pawnRule(target, action);
        break;
        
        default:
            return true;
    }
}

function pawnRule(target, action) {
    var selected = chessSet[$('.selected').attr('id')];
    //Our pawn coordinates
    var px = chessSet[$('.selected').attr('id')].position.x;
    var py = chessSet[$('.selected').attr('id')].position.y;
    //Targeted area coordinates
    var tx = target.index();
    var ty = target.closest('tr').index();
    
    if((action === "move")){
        //Just fooling around a bit with this super looong if statements, I was bored. I'll remodel this soon, I promise :)
        if( ((selected.team === "white")&&(((py - ty)===1)&&(px === tx)))||((selected.team === "black")&&(((py - ty)=== -1)&&(px === tx))) ){
            return true;
        } else if(selected.virgin&&((selected.team === "white")&&((px === tx)&&((py - ty) === 2)&&($('#chessBoard tr:nth-child('+(py-1)+') td:nth-child('+px+')').length === 0)))||(((selected.team === "black")&&((px === tx)&&((py - ty) === -2)&&($('#chessBoard tr:nth-child('+(py+1)+') td:nth-child('+px+')').length === 0))))){
            return true;
        } else {
            return false;
        }
    }
}











