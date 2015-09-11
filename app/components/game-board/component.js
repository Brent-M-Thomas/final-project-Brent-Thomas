import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'table',

  twoDimensionalPieces: Ember.computed('puzzleGame.pieces', function() {
    var pieces = this.get('puzzleGame.pieces');

    return pieces.reduce(function(prev, current, index) {
      if (index % 3 === 0) {
        prev.push([]);
      }
      prev[prev.length-1].push({value: current, index});

      return prev;
    }, []);
  }),

  notRightEdge: function(piece) {
    return piece.index !== 2 && piece.index !== 5;
  },

  notLeftEdge: function(piece) {
    return piece.index !== 3 && piece.index !== 6;
  },

  getAdjacentSpots: function(piece) {
    var spots = [];

    if (piece.index - 3 >= 0) {
      spots.push(piece.index - 3);
    } if (piece.index - 1 >= 0 && this.notLeftEdge(piece)) {
      spots.push(piece.index - 1);
    } if (piece.index + 1 <= 9 && this.notRightEdge(piece)) {
      spots.push(piece.index + 1);
    } if (piece.index + 3 <= 9) {
      spots.push(piece.index + 3);
    }
    return spots;
  },

  getOpenSpot: function(piece) {
    var adjacentSpots = this.getAdjacentSpots(piece);
    var pieces = this.get('puzzleGame.pieces');

    return adjacentSpots.reduce((prev, spot) => {
      if (pieces[spot] === 0) {
        return true;
      }

      return prev;
    }, false);
  },

  checkWin: function() {
    var pieces = this.get('puzzleGame.pieces');
    return pieces.reduce((prev, value, index) => {
      if (value !== 0 && index + 1 !== value) {
        console.log(index, value);
        return false;
      }

      return prev;
    }, true);
  },

  actions: {
    movePiece: function(piece) {
      var openSpot = this.getOpenSpot(piece);
      if (openSpot) {
        var pieces = this.get('puzzleGame.pieces');
        var emptyIndex = pieces.indexOf(0);
        pieces[piece.index] = 0;
        pieces[emptyIndex] = piece.value;
        this.set('puzzleGame.pieces', []);
        this.set('puzzleGame.pieces', pieces);

        if (this.checkWin()) {
          this.sendAction('onSolved');
        }

      }
    },
    resetGame: function() {
      this.get('puzzleGame').newGame();
    }
  },
});
