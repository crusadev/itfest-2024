const axios = require('axios');

const apiKey = "AIzaSyAaF--NatPldFBCDLoV9a7Sc--Kp8OejD0"
const query = "Reciclare deseuri";

const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${apiKey}`;

/* Filter business_status, location: { lat, lng }, name, placeid*/

const fetchPlaces = async () => {
    try {
    const response = await axios.get(url);
    const data = response.data.results.map(place => ({
        icon: place.icon,
        business_status: place.business_status,
        location: {
            lat: place.geometry.location.lat,
            lng: place.geometry.location.lng
        },
        formatted_address: place.formatted_address,
        name: place.name,
        place_id: place.place_id
    }));
   
    return data;
    } catch (err) {
        console.error("Error fetching places: ", err);
        throw err;
    }
}

module.exports = { fetchPlaces };
