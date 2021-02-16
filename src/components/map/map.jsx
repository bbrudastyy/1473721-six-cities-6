import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";

const Map = ({hotels}) => {

  const mapRef = useRef();
  const city = [52.38333, 4.9];
  const zoom = 12;

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: city,
      zoom
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    hotels.forEach((hotel) => {
      const customIcon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      leaflet.marker({
        lat: hotel.location.latitude,
        lng: hotel.location.longitude
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(hotel.title);

      return () => {
        mapRef.current.remove();
      };
    });
  }, []);

  return (
    <div id="map" style={{height: `500px`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  hotels: PropTypes.array
};

export default Map;
