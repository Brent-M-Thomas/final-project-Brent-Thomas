import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  date: null,
  interval: 100,

  setDate: function() {
    this.set('date', moment());
  }.observes('puzzle.id').on('init'),

  actions: {
    reset: function() {
      this.setDate();
      this.sendAction('onReset');
    }
  },
});
