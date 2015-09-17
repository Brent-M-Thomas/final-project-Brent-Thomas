import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('home.solve', '-JyhdTcqOiYRCkTIqAyM');
  },

  model: function() {
    return this.store.findAll('puzzle');
  },
  actions: {
    changeRoute: function(puzzle) {
      if (puzzle === 'new') {
        this.transitionTo('home.create');
      }
      else {
        this.transitionTo('home.solve', puzzle);
      }
    }
  }
});

