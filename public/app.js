var init = function(){
  var container = document.getElementById('main-map');
  var center = {lat: 51.5, lng: -0.127758};
  var zoomLevel = 10;
  var mainMap = new MapWrapper(container, center, zoomLevel);
  mainMap.addMarker(center);
  // var newMarker = {lat: 50.5, lng: -5.127758}
  // mainMap.addMarker(newMarker);
  mainMap.addClickEvent();
  mainMap.addClickEventAddMarkerButton();
  mainMap.addClickEventCurrentLocationButton();
};

window.onload = init;
