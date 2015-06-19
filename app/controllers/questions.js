import Ember from 'ember';

export default Ember.ArrayController.extend({

  isCreatingQuestion: false,
  actions: {

    newQuestion: function () {
      this.set('isCreatingQuestion', true);
    },

    addQuestion: function() {
      var newQuestion = this.store.createRecord('question', {
        title: this.get('title'),
        user: this.get('user'),
        text: this.get('text')
      });
      newQuestion.save();
      this.set('isCreatingQuestion', false);
    }

  }

});
