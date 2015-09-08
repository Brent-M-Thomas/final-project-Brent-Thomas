import DS from 'ember-data';
import _ from 'lodash/lodash';

export default DS.Model.extend({

  pieces: DS.attr({
    defaultValue: function() {
      return _.range(1, 10);
    },
  }),

  shuffle: function() {
    var pieces = _.shuffle(this.get('pieces'));
    this.set('pieces', pieces);
  },

  removeLastPiece: function() {
    var pieces = this.get('pieces');

    pieces.popObject();
    pieces.pushObject(0);
  },

  newGame: function() {
    this.removeLastPiece();
    this.shuffle();
  },

});
