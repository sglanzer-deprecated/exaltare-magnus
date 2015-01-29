import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('stage', { name: "Redbrand Hideout" }).then(function(stages) {
      return stages.get('firstObject');
    });
  }
});
