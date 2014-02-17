$(document).ready(function() {

  var sampleAPI = new SampleAPI();

  // ------------------------ get locations ------------------------
  $("#getLocations").click(function() {
      sampleAPI.getLocations();
  });

  // ------------------------ post location ------------------------

  // Attach a submit handler to the form
  $("#postLocation").submit(function( event ) {
    // Stop form from submitting normally
    event.preventDefault();   

    var $form = $(this);

    var location = JSON.stringify({
        user_id: 3,
        latitude: $form.find( "input[name='latitude']" ).val(),
        longitude: $form.find( "input[name='longitude']" ).val(),
        altitude: $form.find( "input[name='altitude']" ).val(),
    });
    sampleAPI.postLocation(location);
  });

  // ------------------------ get access token ------------------------
  $("#getAccessToken").click(function() {

    var data = JSON.stringify({
        grant_type: "password",
        client_id: "2a30e721e9b8ab682e75",
        client_secret: "5041697db48b1a819df792a50cd79b311cb3008e",
        username: "root",
        password: "root",
        scope: "write",
    });

    sampleAPI.getAccessToken("http://localhost:8000/oauth2/access_token", data);
  });  

});