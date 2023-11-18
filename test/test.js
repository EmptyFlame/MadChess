const {
    pawnRule,
    knightRule,
    rookRule,
    bishopRule,
    kingRule,
    queenRule,
    setBoard,
    movePiece,
    whatToDo
  } = require('../js/index');

  require('../js/gameData');

  require('../js/gameInit')

  describe('setBoard', () => {
    test('should set up the chessboard with pieces at their initial positions', () => {

      const assemblerMock = jest.fn();
      const whitePawn = chessSet["p-w-1"];
      const expectedAssembler = $('<div id="p-w-1" class="pawn white"></div>');

      const movePieceMock = jest.fn();
      jest.spyOn(global, 'movePiece').mockImplementation(movePieceMock);

      setBoard();

      expect(assemblerMock).toHaveBeenCalledWith(expectedAssembler, 1, 7);

      for (const pieceId in chessSet) {
        const piece = chessSet[pieceId];
        expect(movePieceMock).toHaveBeenCalledWith(expectedAssembler, piece.position.x, piece.position.y);
      }
    });
  
  });

  describe('movePiece', () => {
    test('should move the piece to the desired coordinates and update chessSet', () => {

      const victimPieceId = "p-w-4";
      const victimPiece = chessSet[victimPieceId];
      const victim = $(`<div id="${victimPieceId}" class="${victimPiece.role} ${victimPiece.team}"></div>`);
  
      const targetSquare = $('#chessBoard tr:nth-child(6) td:nth-child(4)');
  
      jest.spyOn(global, 'isPathClear').mockReturnValue(true);

      movePiece(victim, 4, 6);

      expect(targetSquare.find(`#${victimPieceId}`).length).toBe(1);
  
      expect(chessSet[victimPieceId].position.x).toBe(4);
      expect(chessSet[victimPieceId].position.y).toBe(6);
    });
  
  });

  describe('whatToDo', () => {
    test('should handle the user input and make decisions', () => {

      const selectedPawn = chessSet["p-w-4"];
      const selectedPieceId = "p-w-4";
  
      jest.spyOn(document, 'querySelector').mockReturnValue({
        getAttribute: jest.fn().mockReturnValue(selectedPieceId),
      });
  
      const targetSquare = {
        find: jest.fn().mockReturnValue({ length: 0 }),
        closest: jest.fn().mockReturnValue({
          index: jest.fn().mockReturnValue(4),
        }),
      };
  
      jest.spyOn(global, 'itsLegal').mockReturnValue(true);
  
      const movePieceMock = jest.fn();
      jest.spyOn(global, 'movePiece').mockImplementation(movePieceMock);
  
      whatToDo(targetSquare);
  
      expect(document.querySelector).toHaveBeenCalledWith(`#${selectedPieceId}`);
  
      expect(global.itsLegal).toHaveBeenCalledWith(targetSquare, 'move');
  
      expect(movePieceMock).toHaveBeenCalledWith(expect.any(Object), 4, 6);
    });
  
  });
  
  describe('pawnRule', () => {
    test('should return true for a valid pawn move', () => {

      const target = {
        closest: jest.fn().mockReturnValue({
          index: jest.fn().mockReturnValue(4),
        }),
        find: jest.fn().mockReturnValue({ length: 0 }),
      };
      const action = 'move';
  
      const selectedPawn = chessSet["p-w-4"];
  
      jest.spyOn(document, 'querySelector').mockReturnValue({
        getAttribute: jest.fn().mockReturnValue(selectedPawn),
      });

      const result = pawnRule(target, action);

      expect(result).toBe(true);
    });


});

describe('knightRule', () => {
  test('should return true for a valid knight move', () => {

    const target = {
      closest: jest.fn().mockReturnValue({
        index: jest.fn().mockReturnValue(3),
      }),
      find: jest.fn().mockReturnValue({ length: 0 }),
    };
    const action = 'move';

    const selectedKnight = chessSet["h-w-l"];

    jest.spyOn(document, 'querySelector').mockReturnValue({
      getAttribute: jest.fn().mockReturnValue(selectedKnight),
    });

    const result = knightRule(target, action);

    expect(result).toBe(true);
  });

});

describe('rookRule', () => {
  test('should return true for a valid rook move', () => {

    const target = {
      closest: jest.fn().mockReturnValue({
        index: jest.fn().mockReturnValue(4),
      }),
      find: jest.fn().mockReturnValue({ length: 0 }),
    };
    const action = 'move';

    const selectedRook = chessSet["r-w-l"];

    jest.spyOn(document, 'querySelector').mockReturnValue({
      getAttribute: jest.fn().mockReturnValue(selectedRook),
    });

    jest.spyOn(global, 'isPathClear').mockReturnValue(true);

    const result = rookRule(target, action);

    expect(result).toBe(true);
  });

});

describe('bishopRule', () => {
  test('should return true for a valid bishop move', () => {

    const target = {
      closest: jest.fn().mockReturnValue({
        index: jest.fn().mockReturnValue(3),
      }),
      find: jest.fn().mockReturnValue({ length: 0 }),
    };
    const action = 'move';

    const selectedBishop = chessSet["b-w-l"];

    jest.spyOn(document, 'querySelector').mockReturnValue({
      getAttribute: jest.fn().mockReturnValue(selectedBishop),
    });

    jest.spyOn(global, 'isDiagonalPathClear').mockReturnValue(true);

    const result = bishopRule(target, action);

    expect(result).toBe(true);
  });

});

describe('queenRule', () => {
  test('should return true for a valid queen move', () => {

    const target = {
      closest: jest.fn().mockReturnValue({
        index: jest.fn().mockReturnValue(5),
      }),
      find: jest.fn().mockReturnValue({ length: 0 }),
    };
    const action = 'move';

    const selectedQueen = chessSet["q-w-l"];

    jest.spyOn(document, 'querySelector').mockReturnValue({
      getAttribute: jest.fn().mockReturnValue(selectedQueen),
    });

    jest.spyOn(global, 'isPathClear').mockReturnValue(true);
    jest.spyOn(global, 'isDiagonalPathClear').mockReturnValue(true);

    const result = queenRule(target, action);

    expect(result).toBe(true);
  });

});

describe('kingRule', () => {
  test('should return true for a valid king move', () => {

    const target = {
      closest: jest.fn().mockReturnValue({
        index: jest.fn().mockReturnValue(5),
      }),
      find: jest.fn().mockReturnValue({ length: 0 }),
    };
    const action = 'move';

    const selectedKing = chessSet["k-w"];

    jest.spyOn(document, 'querySelector').mockReturnValue({
      getAttribute: jest.fn().mockReturnValue(selectedKing),
    });

    const result = kingRule(target, action);

    expect(result).toBe(true);
  });

});