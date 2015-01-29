import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tile',
  classNames: ['tile'],
  classNameBindings: ['tileType'],
  tile: null,
  tileType: function () {
    return 'tile--' + this.get('tile').type;
  }.property('tile')
});
