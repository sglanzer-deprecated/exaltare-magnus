import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'row',
  classNames: ['row'],
  row: [],
  sortedColumnContainers: function() {
    return this.get('row').sortBy('columnIndex');
  }.property('row')
});
