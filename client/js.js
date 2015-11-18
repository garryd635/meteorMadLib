Meteor.startup(function() {

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