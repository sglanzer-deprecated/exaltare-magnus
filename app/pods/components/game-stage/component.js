import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'stage',
  classNames: ['stage'],
  tileMap: null,
  stage: [],
  sortedRowContainers: function() {
    return this.get('stage').sortBy('rowIndex');
  }.property('stage'),

  willInsertElement: function() {
    var stage = [];

    // Map the tiles into the stage
    var rowContainer = null;
    this.get('tileMap').forEach(function(entry) {
        for (var rowIndex = entry.span[0][0]; rowIndex < (entry.span[1][0] + 1); rowIndex++) {
          if (!stage.find(function(item) { return item.rowIndex === rowIndex; })) {
            stage.addObject({ rowIndex: rowIndex, row: [] });
          }
          rowContainer = stage.find(function(item) { return item.rowIndex === rowIndex; });

          for (var columnIndex = entry.span[0][1]; columnIndex < (entry.span[1][1] + 1); columnIndex++) {
            if (!rowContainer.row.find(function(item) { return item.columnIndex === columnIndex; })) {
              rowContainer.row.addObject({ columnIndex: columnIndex, tile: { row: rowContainer.rowIndex, column: columnIndex, type: entry.type }});
            }
          }
        }
      }
    );

    // Determine which row has the most columns
    var stageColumnWidth = 0;
    stage.forEach(function(rowContainer) {
      rowContainer.row.forEach(function(columnContainer) {
        if (columnContainer.columnIndex > stageColumnWidth) {
          stageColumnWidth = columnContainer.columnIndex;
        }
      })
    });

    // Fill out the stage with empty tiles so that the stage is a fully populated square
    stage.forEach(function(rowContainer) {
      for (var columnIndex = 0; columnIndex <= stageColumnWidth; columnIndex++) {
        if (!rowContainer.row.find(function(item) { return item.columnIndex === columnIndex; })) {
          rowContainer.row.addObject({ columnIndex: columnIndex, tile: { row: rowContainer.rowIndex, column: columnIndex, type: 'empty' }});
        }
      }
    });

    this.set('stage', stage);
  }
});
