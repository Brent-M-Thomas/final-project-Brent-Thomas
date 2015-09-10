import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  setupController: function(controller, puzzle) {
    var puzzleGame = this.store.createRecord('puzzle-game');
    puzzleGame.newGame();

    this._super(controller, {puzzleGame, puzzle});
  },

  actions: {
    resetGame: function() {
      this.controller.get('model.puzzleGame').newGame();
    }
  }
});

