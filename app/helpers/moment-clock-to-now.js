import Ember from 'ember';
import moment from 'moment';
import computeFn from 'ember-moment/utils/compute-fn';

const runBind = Ember.run.bind;

export default Ember.Helper.extend({
  globalAllowEmpty: false,

  compute: computeFn(function(params, hash) {
    this.clearTimer();
    hash.format = hash.format || 'HH:mm:ss';

    if (hash.interval) {
      this.timer = setTimeout(runBind(this, this.recompute), parseInt(hash.interval, 10));
    }

    let start = moment(params[0]);
    let end = moment();

    if (hash.locale) {
      start = start.locale(hash.locale);
      end = end.locale(hash.locale);
    }

    let diff = end.diff(start);
    let hackDurr = moment(diff);

    return hackDurr.format(hash.format);
  }),

  clearTimer() {
    clearTimeout(this.timer);
  },

  destroy() {
    this.clearTimer();
    this._super(...arguments);
  }
});
