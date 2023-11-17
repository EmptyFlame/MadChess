
var allSet = false; // Assuming this variable is defined elsewhere in your code
var team = "white"; // Initialize the starting team


// Function to set up the chessboard
function setBoard() {
    if (!allSet) {
        var piece;
        var assembler;
        for (piece in chessSet) {
            assembler = $('<div id="' + piece + '" class="' + chessSet[piece].role + ' ' + chessSet[piece].team + '"></div>');
            movePiece(assembler, chessSet[piece].position.x, chessSet[piece].position.y);
        }
        allSet = true;
    }
}

// Function to move the chess piece to desired coordinates
function movePiece(victim, x, y) {
    var target = $('#chessBoard tr:nth-child(' + y + ') td:nth-child(' + x + ')');
    var capturedPiece = target.find('div');

    if (capturedPiece.length > 0) {
        capturedPiece.remove();
    }

    victim.appendTo(target);

    if (allSet) {
       chessSet[victim.attr('id')].position.x = x;
        chessSet[victim.attr('id')].position.y = y;

        $('.selected').removeClass('selected');

        team = (team === "white") ? "black" : "white";
    }
}

// What to do when we click on one of the fields
function whatToDo(target) {
    var piece = target.find('div');
    if (piece.length) {
        if (piece.attr('class').split(' ')[1] === team && ((!($('.selected').length)) || (($('.selected').length) && ($('.selected').attr('id') === piece.attr('id'))))) {
            piece.toggleClass('selected');
        } else if (itsLegal(target, "capture")) {
            movePiece($('.selected'), target.closest('td').index() + 1, target.closest('tr').index() + 1);
        }
    } else {
        if (itsLegal(target, "move")) {
            movePiece($('.selected'), target.closest('td').index() + 1, target.closest('tr').index() + 1);
        }
    }
}

// Function that chooses what rule should be checked according to the role of a figure
function itsLegal(target, action) {
    var selected = chessSet[$('.selected').attr('id')];
    switch (selected.role) {
        case "pawn":
            return pawnRule(target, action);
        case "knight":
            return knightRule(target, action);
        case "rook":
            return rookRule(target, action);
        case "bishop":
            return bishopRule(target, action);
        case "king":
            return kingRule(target, action);
        case "queen":
            return queenRule(target, action);
        default:
            return true;
    }
}

function pawnRule(target, action) {
    var selected = chessSet[$('.selected').attr('id')];
    var px = selected.position.x;
    var py = selected.position.y;
    var tx = target.closest('td').index() + 1;
    var ty = target.closest('tr').index() + 1;

    if (action === "move" || action === "capture") {
        var direction = (selected.team === "white") ? 1 : -1;
        var initialRow = (selected.team === "white") ? 2 : 7;

        if (
            ((py - ty) === direction && px === tx && target.find('div').length === 0) ||
            (Math.abs(py - ty) === direction && Math.abs(px - tx) === 1 && target.find('div').length > 0)
        ) {
            return true;
        } else {
            return false;
        }
    }
}

function knightRule(target, action) {
    var selected = chessSet[$('.selected').attr('id')];
    var px = selected.position.x;
    var py = selected.position.y;
    var tx = target.closest('td').index() + 1;
    var ty = target.closest('tr').index() + 1;

    if (action === "move" || action === "capture") {
        var deltaX = Math.abs(px - tx);
        var deltaY = Math.abs(py - ty);

        if ((deltaX === 1 && deltaY === 2) || (deltaX === 2 && deltaY === 1)) {
            var pieceInTarget = target.find('div');
            if (!pieceInTarget.length) {
                return true;
            }
        }
    }
    return false;
}

function rookRule(target, action ) {
    var selected = chessSet[$('.selected').attr('id')];
    var px = selected.position.x;
    var py = selected.position.y;
    var tx = target.closest('td').index() + 1;
    var ty = target.closest('tr').index() + 1;

    if (action === "move" || action === "capture") {
        if ((px === tx && py !== ty) || (px !== tx && py === ty)) {
            if (isPathClear(px, py, tx, ty)) {
                return true;
            }
        }
    }
    return false;
}

function bishopRule(target, action) {
    var selected = chessSet[$('.selected').attr('id')];
    var px = selected.position.x;
    var py = selected.position.y;
    var tx = target.closest('td').index() + 1;
    var ty = target.closest('tr').index() + 1;

    if (action === "move" || action === "capture") {
        if (Math.abs(px - tx) === Math.abs(py - ty)) {
            if (isDiagonalPathClear(px, py, tx, ty)) {
                return true;
            }
        }
    }
   return false;
}

function kingRule(target, action) {
    var selected = chessSet[$('.selected').attr('id')];
    var px = selected.position.x;
    var py = selected.position.y;
    var tx = target.closest('td').index() + 1;
    var ty = target.closest('tr').index() + 1;

    if (action === "move" || action === "capture") {
        if (Math.abs(px - tx) <= 1 && Math.abs(py - ty) <= 1) {
            return true;
        }
    }
    return false;
}

function queenRule(target, action) {
    var selected = chessSet[$('.selected').attr('id')];
    var px = selected.position.x;
    var py = selected.position.y;
    var tx = target.closest('td').index() + 1;
    var ty = target.closest('tr').index() + 1;

    if (action === "move" || action === "capture") {
        if ((px === tx && py !== ty) || (px !== tx && py === ty)) {
            if (isPathClear(px, py, tx, ty)) {
                return true;
            }
        }
        else if (Math.abs(px - tx) === Math.abs(py - ty)) {
            if (isDiagonalPathClear(px, py, tx, ty)) {
                return true;
            }
        }
    }
    return false;
}

// Function to check if the diagonal path between two squares is clear for a bishop to move
function isDiagonalPathClear(startX, startY, endX, endY) {
    var stepX = (endX > startX) ? 1 : -1;
    var stepY = (endY > startY) ? 1 : -1;

    for (var x = startX + stepX, y = startY + stepY; x !== endX || y !== endY; x += stepX, y += stepY) {
        var square = $('#chessBoard tr:nth-child(' + y + ') td:nth-child(' + x + ')');
        if (square.find('div').length !== 0) {
            return false;
        }
    }
    return true;
}

// Function to check if the path between two squares is clear for a rook to move
function isPathClear(startX, startY, endX, endY) {
    var stepX = (startX === endX) ? 0 : (endX > startX) ? 1 : -1;
    var stepY = (startY === endY) ? 0 : (endY > startY) ? 1 : -1;

    for (var x = startX + stepX, y = startY + stepY; x !== endX || y !== endY; x += stepX, y += stepY) {
        var square = $('#chessBoard tr:nth-child(' + y + ') td:nth-child(' + x + ')');
        if (square.find('div').length !== 0) {
            return false;
        }
    }
    return true;
}

module.exports = {
    pawnRule,
    knightRule,
    rookRule,
    bishopRule,
    kingRule,
    queenRule,
    setBoard,
    whatToDo,
    movePiece
  };
