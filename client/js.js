Meteor.startup(function() {


  Template.hello.events({

    'click button': function () {
      // increment the counter when button is clicked
      console.log("Hello,World");
      // Session.set('counter', Session.get('counter') + 1);

  $("#generateButton").click(function(event) {
  event.preventDefault();
  var exclamation = $('#exclamation').val();
  var adverb = $('#adverb').val();
  var noun = $('#noun').val();;
  var verb = $('#verb').val();;
  console.log(adverb);

  });

});



// Template.hello.events({
//   "click button":function(){
//     console.log(exclamation)
//   }  });