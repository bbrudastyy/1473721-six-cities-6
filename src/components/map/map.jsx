import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import CardProps from '../card/card.prop';

import "leaflet/dist/leaflet.css";

const Map = ({hotels, type, activeOffer}) => {
  const firstHotel = hotels[0];
  const mapRef = useRef();
  const city = [firstHotel.city.location.latitude, firstHotel.city.location.longitude];
  const zoom = 9;
  const [map, setMap] = useState(null);

  useEffect(() => {
    const leafletMap = leaflet.map(mapRef.current, {
      center: city,
      zoom
    });
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(leafletMap);
    setMap(leafletMap);

    return () => {
      leafletMap.remove();
    };
  }, []);

  useEffect(() => {
    if (!map) {
      return () => {
      };
    }
    const markers = hotels.map((hotel) => {
      let iconUrl = `img/pin.svg`;
      if (hotel.id === activeOffer.id) {
        iconUrl = `img/pin-active.svg`;
      }

      const customIcon = leaflet.icon({
        iconUrl,
        iconSize: [30, 30]
      });
      return leaflet.marker({
        lat: hotel.location.latitude,
        lng: hotel.location.longitude
      },
      {
        icon: customIcon
      })
        .addTo(map)
        .bindPopup(hotel.title);
    });
    return () => {
      markers.forEach((marker) => marker.remove());
    };
  }, [map, hotels, activeOffer]);

  return (
    <section className={`${type}__map map`} ref={mapRef}></section>
  );
};

Map.propTypes = {
  hotels: PropTypes.arrayOf(CardProps),
  type: PropTypes.string,
  activeOffer: CardProps
};

export default Map;
