console.log('geolocate.js ready to roll')

if (navigator.geolocation) //if supported by browser

{

    navigator.geolocation.getCurrentPosition(showPosition);
    

}

var userMarker = null // here is where we'll store the maker for the user

function showPosition(position)
{
    
    console.log(position)
    
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    
    var coordinates = new mapboxgl.LngLat( longitude, latitude)

    //create marker if it doesn't exist, (if its nothing)
    if (userMarker == null)     
    {
         // create a div element for the marker
        var div = document.createElement('div')
        // add a class called 'marker' to the div
        div.className = 'marker user'
        // create the custom marker
        userMarker = new mapboxgl.Marker(div)
        .setLngLat(coordinates) // set the marker position
        .addTo(map) // add the marker to map
    }
    else // otherwise just update its coordinates
    {
        userMarker.setLngLat(coordinates)

    }
    
    
    
    
    
    
}






