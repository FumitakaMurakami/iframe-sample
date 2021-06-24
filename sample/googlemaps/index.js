let map;

function initMap() {
  function geoSetup() {
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latitude, lng: longitude },
        zoom: 50,
      });
    }

    function error() {
      alert("Unable to retrieve your location");
    }

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      alert("Locating…");
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
  geoSetup();
}
