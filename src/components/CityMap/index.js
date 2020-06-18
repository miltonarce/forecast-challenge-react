import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "95%",
  height: "95%",
};

const CityMap = ({ coord }) => {
  return (
    <Container>
      <LoadScript googleMapsApiKey="AIzaSyA1rsa7TC-vo8S1Nl9YfLQ2asco2l7h1mg">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: coord.lat, lng: coord.lon }}
          zoom={10}
        >
          <Marker position={{ lat: coord.lat, lng: coord.lon }} />
        </GoogleMap>
      </LoadScript>
    </Container>
  );
};

CityMap.propTypes = {
  coord: PropTypes.object,
};

export default React.memo(CityMap);
