import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  user: DS.attr('string'),
  text: DS.attr('string'),
  answers: DS.hasMany('answer', {async: true})
});
