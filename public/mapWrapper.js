var MapWrapper = function(container, center, zoomLevel){
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoomLevel
  });
  this.markers = [];
};

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
    });
    this.markers.push(marker);
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var markerCoords = event.latLng;
      this.addMarker(markerCoords);
      var markerNo = document.getElementById('marker-no');
      markerNo.value = this.markers.length - 1;

    }.bind(this));
  },

  addCoordsToMarker: function(marker){
    var lat = marker.position.lat().toFixed(4);
    var lng = marker.position.lng().toFixed(4);
    var infoWindow = new google.maps.InfoWindow({content:( lat + ", " + lng )});
    infoWindow.open(this.googleMap, marker);
  },

  addClickEventCurrentLocationButton: function(){
    var button = document.getElementById('current-location');
    button.addEventListener('click', function(){
      this.moveMapToCurrentLocation();
    }.bind(this));
  },

  addClickEventAddMarkerButton: function(){
    console.log("test");
    var button = document.getElementById('add-marker');
    button.addEventListener('click', function(){
      var markerNo = document.getElementById('marker-no');
      this.addCoordsToMarker(this.markers[markerNo.value]);

    }.bind(this));
  },

  moveMapToCurrentLocation: function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      var coords = {lat: position.coords.latitude, lng: position.coords.longitude};
      this.googleMap.setCenter(coords);
      this.googleMap.zoom = 8;
      this.addMarker(coords);
    }.bind(this));

  }

};
