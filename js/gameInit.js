setBoard();
//Setting clickevent on every field on chess board and deciding what action should be taken
$("#chessBoard tr td").click(function(){
    whatToDo($(this).find('div'));
});