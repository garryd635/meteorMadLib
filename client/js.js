Meteor.startup(function() {
  $('#mad-lib-sentence').hide()
  $("#generateButton").click(function(event) {
  event.preventDefault();
  var exclamation = $('#exclamation').val();
  var adverb = $('#adverb').val();
  var noun = $('#noun').val();;
  var verb = $('#verb').val();;

  $('#exclamation-mad-lib').html(exclamation)
  $('#adverb-mad-lib').html(adverb)
  $('#noun-mad-lib').html(noun)
  $('#verb-mad-lib').html(verb)

  $('p').hide()
  $('#mad-lib-sentence').fadeIn("slow")

  });

});



// Template.hello.events({
//   "click button":function(){
//     console.log(exclamation)
//   }  });