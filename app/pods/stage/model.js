import DS from 'ember-data';

var StageModel = DS.Model.extend({
  name: DS.attr('string'),
  tileMap: DS.attr()
});

StageModel.reopenClass({
  FIXTURES: [
    { id: 1, name: "Redbrand Hideout",
      tileMap: [
        { span: [[0, 0], [3, 3]], type: 'neutral-1' }, // 11
        { span: [[0, 4], [2, 7]], type: 'neutral-2' }, // 12
        { span: [[0, 8], [2, 8]], type: 'neutral-3' }, // 12S
        { span: [[0, 9], [2, 12]], type: 'neutral-4' }, // 7
        { span: [[0, 13], [0, 13]], type: 'neutral-4' }, // 7
        { span: [[0, 14], [2, 14]], type: 'neutral-3' }, // 7S
        { span: [[0, 15], [2, 16]], type: 'neutral-2' }, // 6
        { span: [[0, 18], [6, 20]], type: 'neutral-1' }, // 5
        { span: [[3, 14], [8, 17]], type: 'neutral-4' }, // 4
        { span: [[7, 18], [8, 25]], type: 'neutral-3' }, // 3
        { span: [[9, 24], [9, 24]], type: 'neutral-3' }, // 3
        { span: [[10, 23], [15, 25]], type: 'neutral-1' }, // 1
        { span: [[11, 21], [14, 22]], type: 'neutral-1' }, // 1
        { span: [[10, 18], [15, 20]], type: 'neutral-1' }, // 1
        { span: [[11, 17], [11, 17]], type: 'neutral-2' }, // 2
        { span: [[10, 14], [13, 16]], type: 'neutral-2' }, // 2
        { span: [[5, 0], [9, 4]], type: 'neutral-2' }, // 10
        { span: [[13, 0], [15, 4]], type: 'neutral-4' }, // 9
        { span: [[10, 1], [12, 1]], type: 'neutral-3' }, // 8
        { span: [[12, 2], [12, 11]], type: 'neutral-3' }, // 8
        { span: [[4, 2], [4, 6]], type: 'neutral-3' }, // 8
        { span: [[5, 6], [5, 8]], type: 'neutral-3' }, // 8
        { span: [[3, 10], [3, 11]], type: 'neutral-3' }, // 8
        { span: [[4, 9], [4, 12]], type: 'neutral-3' }, // 8
        { span: [[5, 10], [5, 12]], type: 'neutral-3' }, // 8
        { span: [[6, 8], [6, 12]], type: 'neutral-3' }, // 8
        { span: [[7, 7], [7, 8]], type: 'neutral-3' }, // 8
        { span: [[7, 11], [7, 11]], type: 'neutral-3' }, // 8
        { span: [[8, 7], [8, 7]], type: 'neutral-3' }, // 8
        { span: [[15, 13], [15, 17]], type: 'neutral-3' }, // 8
        { span: [[13, 13], [14, 13]], type: 'neutral-3' }, // 8
        { span: [[13, 10], [13, 12]], type: 'neutral-3' }, // 8
        { span: [[13, 6], [13, 8]], type: 'neutral-3' }, // 8
        { span: [[14, 8], [16, 8]], type: 'neutral-3' }, // 8
        { span: [[8, 10], [8, 11]], type: 'neutral-3' }, // 8
        { span: [[9, 10], [9, 10]], type: 'neutral-3' }, // 8
        { span: [[10, 10], [10, 11]], type: 'neutral-3' }, // 8
        { span: [[11, 10], [11, 11]], type: 'neutral-3' }, // 8
        { span: [[9, 6], [9, 7]], type: 'neutral-3' }, // 8
        { span: [[10, 6], [10, 8]], type: 'neutral-3' }, // 8
        { span: [[11, 6], [11, 6]], type: 'neutral-3' }, // 8
        { span: [[11, 8], [11, 8]], type: 'neutral-3' } // 8
      ]
    }
  ]
});

export default StageModel;
