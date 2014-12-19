var SampleAPI = function() {

  var API_URL = "http://localhost:8000/api/v1/";

  var access_token = "33faa76c33b5f6fdef888fda0ca379a5deecc739";

  var client = new HttpClient();


  this.postLocation = function(location) {
    client.httpPost(API_URL + "location/", "OAuth " + access_token, location,
      function (jqXHR, textStatus) {
        console.log("receive: created");
        $("#postResult").text(textStatus + " " + jqXHR.status + " " + jqXHR.statusText);
      },
      function (jqXHR, textStatus) {
        var completeMessage = textStatus + " " + jqXHR.status + " " + jqXHR.statusText;
        console.log("receive: " + completeMessage);
        console.log(jqXHR.responseText);
        $("#postResult").text(completeMessage);
      }
    );
  }


  this.getLocations = function() {
    client.httpGet(API_URL + "location/", "OAuth " + access_token,
      function (data, textStatus, jqXHR) {
        var completeMessage = textStatus + " " + jqXHR.status + " " + jqXHR.statusText;
        console.log("receive: " + completeMessage);
        $("#getResult").text(completeMessage);

        $('#locationList li').remove();
        $.each( data.objects, function( i, item ) {
          $("#locationList").append("<li>" + item.latitude + ", " + item.longitude + ": " + item.altitude + "</li>");
        });
        $("#locationList").listview("refresh");
      },
      function (jqXHR, textStatus) {
        var completeMessage = textStatus + " " + jqXHR.status + " " + jqXHR.statusText;
        console.log("receive: " + completeMessage);
        $("#getResult").text(completeMessage);        
      }
    );
  }


  this.getAccessToken = function(url, data) {
      console.log("request:" + url + data);

      $.ajax({
        url: url,
        type: 'POST',
        data: data,
//      xhrFields: {
//        withCredentials: true
//      },
//      password: "root",
//      username: "root",
//      dataType: 'json',
//      contentType: 'application/x-www-form-urlencoded',
//            processData: false,
        complete: function(jqXHR, textStatus) {
          var completeMessage = textStatus + " " + jqXHR.status + " " + jqXHR.statusText;
          console.log("receive: " + completeMessage);
          console.log("\t" + jqXHR.responseText);
          $("#tokenResult").text(completeMessage);
        }
      }); 
  }

}