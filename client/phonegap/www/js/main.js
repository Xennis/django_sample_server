document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

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
            user_id: 10,
            latitude: $form.find( "input[name='latitude']" ).val(),
            longitude: $form.find( "input[name='longitude']" ).val(),
            altitude: $form.find( "input[name='altitude']" ).val(),
        });
        sampleAPI.postLocation(location);
      });
      
//      navigator.geolocation.getCurrentPosition(onSuccess, c);
      
      var watchId = navigator.geolocation.watchPosition(onSuccess, onSuccess);
      
          // onSuccess Geolocation
        function onSuccess(position) {
        var $form = $("#postLocation");
        $form.find( "input[name='latitude']" ).val(position.coords.latitude);
        $form.find( "input[name='longitude']" ).val(position.coords.longitude);
        if (position.coords.altitude) {
            $form.find( "input[name='altitude']" ).val(position.coords.altitude);
        }
        
        console.log('Latitude: '           + position.coords.latitude              + '\n' +
                    'Longitude: '          + position.coords.longitude             + '\n' +
                    'Altitude: '           + position.coords.altitude              + '\n' +
                    'Accuracy: '           + position.coords.accuracy              + '\n' +
                    'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '\n' +
                    'Heading: '            + position.coords.heading               + '\n' +
                    'Speed: '              + position.coords.speed                 + '\n' +
                    'Timestamp: '          + position.timestamp                    + '\n');
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        console.log('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }


}
