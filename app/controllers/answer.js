import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['question'],
  actions: {

    save: function() {
      var newAnswer = this.store.createRecord('answer', {
        user: this.get('user'),
        text: this.get('text')
      });
      newAnswer.save();
      this.set('user', '');
      this.set('text', '');

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(newAnswer);
      question.save();
      this.get('controllers.question').set('isAnswering', false);
      this.transitionToRoute('question', question);
    }

  }
});
