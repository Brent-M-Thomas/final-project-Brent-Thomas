import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  setupController: function(controller, puzzle) {
    var puzzleGame = this.store.createRecord('puzzle-game');
    puzzleGame.newGame();
    controller.set('clockInterval', 100);

    this._super(controller, {puzzleGame, puzzle});
  },

  actions: {
    resetGame: function() {
      this.controller.get('model.puzzleGame').newGame();
    },
    stopClock: function() {
      this.controller.set('clockInterval', 0);
    },
    startClock: function() {
      this.controller.set('clockInterval', 100);
    }
  }
});

