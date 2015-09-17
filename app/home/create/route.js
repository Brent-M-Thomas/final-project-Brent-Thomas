import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
  },

  actions: {
    save: function(title, imageUrl) {
      var puzzle = this.store.createRecord('puzzle', {title, imageUrl});
      puzzle.save().then(() => {
        this.transitionTo('home');
      });
    },
  },

});
