import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  date: null,

  setDate: Ember.on('init', function() {
    this.set('date', moment());
  }),

  actions: {
    reset: function() {
      this.setDate();
      this.sendAction('onReset');
    }
  }
});
