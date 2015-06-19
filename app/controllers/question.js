import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  isAnswering: false,

  actions: {

    addAnswer: function() {
      this.set('isAnswering', true);
      this.transitionToRoute('answer');
    },

    deleteAnswer: function(answer) {

     if (confirm('Are you sure?')){
       var question = this.get('model');
       question.get('answers').removeObject(answer);
       question.save();
       answer.deleteRecord();
       answer.save();
       this.transitionToRoute('question', question.id);
     }
   },


    editQuestion: function() {

      this.set('isEditing', true);

    },

    deleteQuestion: function() {

      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    },

    updateQuestion: function () {
      this.get('model').destroyRecord();
      var newQuestion = this.store.createRecord('question', {
        title: this.get('title'),
        user: this.get('user'),
        text: this.get('text')
      });
      newQuestion.save();
      this.set('isEditing', false);
      this.transitionToRoute('questions');
    }
  }

});
