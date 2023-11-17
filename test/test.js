const {
    pawnRule,
    knightRule,
    rookRule,
    bishopRule,
    kingRule,
    queenRule,
  } = require('../js/index');

  require('../js/gameData');

  require('../js/gameInit')
  
  describe('pawnRule', () => {
    test('should return true for a valid pawn move', () => {
      // Arrange
      const target = {
        closest: jest.fn().mockReturnValue({
          index: jest.fn().mockReturnValue(4),
        }),
        find: jest.fn().mockReturnValue({ length: 0 }),
      };
      const action = 'move';
  
      // Mock the selected pawn as a white pawn at position (4, 7)
      const selectedPawn = chessSet["p-w-4"];
  
      // Mock the document.querySelector function to return the selected pawn
      jest.spyOn(document, 'querySelector').mockReturnValue({
        getAttribute: jest.fn().mockReturnValue(selectedPawn),
      });
  
      // Act
      const result = pawnRule(target, action);
  
      // Assert
      expect(result).toBe(true);
    });


});