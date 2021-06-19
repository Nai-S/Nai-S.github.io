// ready validation for form

$(document).ready(function(){

  $("#myform").keypress(function (event) {
                if (event.keyCode == 13) {
                    event.preventDefault();
                }
            });
  $("#myform").validate({

		messages: {
			name: "Please enter your name",
      weather: "Please choose a weather preference",
      color: "Please choose at least one color",
      gen: "Please choose an gender",
	    },

  /* the following is needed to place an error msg after the radio and checkbox elements */

  errorPlacement: function(error, element) {
  if ( element.is(":radio") || element.is(":checkbox")) {
    error.appendTo( element.parent().focus());
  } else {
    error.insertAfter(element);
  }
  } // end errorPlacement
 });
});