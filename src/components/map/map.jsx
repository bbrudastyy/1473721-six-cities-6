import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import "leaflet/dist/leaflet.css";

const Map = ({hotels}) => {
  const mapRef = useRef();
  const city = [52.38333, 4.9];
  const zoom = 9;

  useEffect(() => {
    const map = leaflet.map(mapRef.current, {
      center: city,
      zoom
    });
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);
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
      .addTo(map)
      .bindPopup(hotel.title);
      return () => {
        map.remove();
      };
    });
  }, []);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
};

Map.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object)
};

export default Map;
