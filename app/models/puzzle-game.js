import DS from 'ember-data';
import _ from 'lodash/lodash';

export default DS.Model.extend({

  // piece1: DS.attr(model.imageURL);
  // piece2: DS.attr(model.imageURL);
  // piece3: DS.attr(model.imageURL);
  // piece4: DS.attr(model.imageURL);
  // piece5: DS.attr(model.imageURL);
  // piece6: DS.attr(model.imageURL);
  // piece7: DS.attr(model.imageURL);
  // piece8: DS.attr(model.imageURL);
  // piece9: DS.attr(model.imageURL);

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
