import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, puzzle) {
    var puzzleGame = this.store.createRecord('puzzle-game');
    puzzleGame.newGame();

    this._super(controller, {puzzleGame, puzzle});
  }
});
