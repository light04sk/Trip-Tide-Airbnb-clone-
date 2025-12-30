const axios = require("axios");

async function getCoordinates(location, country) {
  const query = `${location}, ${country}`;
  const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(query)}.json?key=AExaI8TaTfq0n6YLaSAV`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.features.length > 0) {
      const [lng, lat] = data.features[0].geometry.coordinates;
      return { lat, lng };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Geocoding error:", error.message);
    return null;
  }
}

module.exports = getCoordinates;
