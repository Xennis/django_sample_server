var sampleAPI = new SampleAPI();

  // ------------------------ get locations ------------------------
  $("#getLocations").click(function() {
      sampleAPI.getLocations();
  });

  // ------------------------ post location ------------------------
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