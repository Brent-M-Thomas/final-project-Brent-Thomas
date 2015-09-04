import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'table',

  twoDimensionalPieces: Ember.computed('puzzleGame.pieces[]', function() {
    var pieces = this.get('puzzleGame.pieces');

    return pieces.reduce(function(prev, current, index) {
      if (index % 3 === 0) {
        prev.push([]);
      }
      prev[prev.length-1].push(current);

      return prev;
    }, []);
  })
});
