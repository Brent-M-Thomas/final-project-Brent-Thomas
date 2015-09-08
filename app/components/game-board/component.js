import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'table',

  twoDimensionalPieces: Ember.computed('puzzleGame.pieces[]', function() {
    var pieces = this.get('puzzleGame.pieces');

    return pieces.reduce(function(prev, current, index) {
      if (index % 3 === 0) {
        prev.push([]);
      }
      prev[prev.length-1].push({value: current, index});

      return prev;
    }, []);
  }),

  getAdjacentSpots: function(piece) {
    var spots = [];

    if (piece.index - 3 >= 0) {
      spots.push(piece.index - 3);
    } if (piece.index - 1 >= 0) {
      spots.push(piece.index - 1);
    } if (piece.index + 1 <= 9) {
      spots.push(piece.index + 1);
    } if (piece.index + 3 <= 9) {
      spots.push(piece.index + 3);
    }
    return spots;
  },

  getOpenSpot: function(piece) {
    var adjacentSpots = this.getAdjacentSpots(piece);
    var pieces = this.get('puzzleGame.pieces');

// "spot" isn't the index of the piece, but the value
    return adjacentSpots.reduce((prev, spot) => {
      if (pieces[spot] === 0) {
        console.log(pieces[spot]);
        prev = pieces[spot];
      }

      return prev;
    }, false);
  },

  actions: {
    movePiece: function(piece) {
      var openSpot = this.getOpenSpot(piece);
      if (openSpot) {
        `$('.piece-0').removeClass('piece-0')`;
        `$('.piece-0').addClass('piece-' + pieces.index)`;
        `$('piece-' + pieces.index).removeClass('piece-' + pieces.index)`;
        `$('piece-' + pieces.index).addClass('piece-0')`;

      }
    },
    checkWin: function(pieces) {
      // if piece.value === piece.index for each piece then: Win!
    }
  },
});
