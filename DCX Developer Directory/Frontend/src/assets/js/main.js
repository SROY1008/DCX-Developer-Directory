// //<script type="text/javascript">
     
//       function initStorage() {

//         function saveName() {
//           var name = document.getElementById("name");
//           localStorage.setItem("name", name.value);
//         }

//         function saveEmail() {
//           var email = document.getElementById("email");
//           localStorage.setItem("email", email.value);
//         }

//         saveName();
//         saveEmail();
      
//       }
        
     
//       function displayName() {
//         //var displayName=document.getElementById("displayName")
//         if (localStorage.getItem("name") != null) {
//           document.write("Welcome back " + localStorage.getItem("name"));
//         }
//         //displayName();
//       }
//      // 
      
   
//       function showText() {
//        // var showText=document.getElementById("news")
//         if (localStorage.getItem("email") == null) {
//           document.getElementById("news").innerHTML
//           document.write("<p>Please enter your email address.</p>");
//         } else {
//           document.write(
//             "<p><strong>Subscribed Email: </strong>" +
//               localStorage.getItem("email") +
//               "</p>"
//           );
//         }
//         showText();
//       }
      
//       //showText();
//       function clearAll() {
//         localStorage.clear();
//         window.location.reload();
//       }
      
    //</script>
    //about us
    
    

    function playPause() {
      var myVideo = document.getElementById("ad");
      if (myVideo.paused) {
        myVideo.play();
      } else {
        myVideo.pause();
      }
    }

    function makeBig() {
      var myVideo = document.getElementById("ad");
      myVideo.width = 560;
    }

    function makeSmall() {
      var myVideo = document.getElementById("ad");
      myVideo.width = 320;
    }

    function makeNormal() {
      var myVideo = document.getElementById("ad");
      myVideo.width = 420;
    }
   
  //   //register
  
    if (navigator.geolocation) {
      
      var timeoutVal = 10 * 1000 * 1000;
      navigator.geolocation.getCurrentPosition(
          displayPosition, 
          displayError,
          { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
      );
  }
  else {
      alert("Geolocation is not supported by this browser");
  }
  function displayPosition(position) {

    
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      var options = {
          zoom: 10,
          center: pos,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"), options);
      var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: "User location"
      });
      var contentString = "<b>Timestamp:</b> " + parseTimestamp(position.timestamp) + "<br/><b>User location:</b> lat " + position.coords.latitude + ", long " + position.coords.longitude + ", accuracy " + position.coords.accuracy;
      var infowindow = new google.maps.InfoWindow({
          content: contentString
      });
      google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
      });
  }
  function displayError(error) {
      var errors = { 
          1: 'Permission denied',
          2: 'Position unavailable',
          3: 'Request timeout'
      };
      alert("Error: " + errors[error.code]);
  }
  function parseTimestamp(timestamp) {
      var d = new Date(timestamp);
      var day = d.getDate();
      var month = d.getMonth() + 1;
      var year = d.getFullYear();
      var hour = d.getHours();
      var mins = d.getMinutes();
      var secs = d.getSeconds();
      var msec = d.getMilliseconds();
      return day + "." + month + "." + year + " " + hour + ":" + mins + ":" + secs + "," + msec;
  }

  //contact
  function updateTextInput(val) {
    document.getElementById('textInput').value=val;
}