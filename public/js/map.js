maptilersdk.config.apiKey = "AExaI8TaTfq0n6YLaSAV";
const map = new maptilersdk.Map({
  container: "map",
  style: maptilersdk.MapStyle.STREETS,
  center: listingCoordinates, // ← this sets the center
  zoom: 12,
});

const marker = new maptilersdk.Marker()
  .setLngLat(listingCoordinates)
  .addTo(map);
