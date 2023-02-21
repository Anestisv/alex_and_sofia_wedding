import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { Trans } from 'react-i18next';
import { commonColors } from '../assets/design/CommonColors';
import styled from 'styled-components';
import React, { useEffect,useRef } from "react";


const MarkerWithOpenPopup = ( props ) => {
    const markerRef = useRef();

    useEffect( () => {
        if ( !markerRef.current ) return;
        markerRef.current.openPopup();
    }, [] );

    return <Marker ref={markerRef} {...props} />;
}

const Map = () => {

    return (
        <MapContainer
            center={[37.9144, 23.8614]}
            zoom={13}
            zoomControl={false}
            scrollWheelZoom={false}
        >
            <ZoomControl position="bottomright" />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerWithOpenPopup position={[37.9144, 23.8614]} >
                <Popup tap={false}>
                    <Trans
                        ns="common"
                        i18nKey="map.directions_text"
                        components={[
                            <LinkItem
                                key={0}
                                href={"https://www.google.com/maps/place/%CE%9A%CF%84%CE%AE%CE%BC%CE%B1+%CE%94%CE%B9%CE%BA%CE%B1%CE%B9%CE%BF%CF%8D%CE%BB%CE%B9%CE%B1/@37.9209656,23.86578,17z/data=!3m1!4b1!4m5!3m4!1s0x14a19128ffe5ccb9:0x82ad7aaab4315231!8m2!3d37.9209656!4d23.8679687"}
                                target={"_blank"}
                                style={{ color: commonColors.title_bez }}
                            />
                        ]}
                    />
                </Popup>
            </MarkerWithOpenPopup>
        </MapContainer>
    )
}

export default Map;


const LinkItem = styled( "a" )( {
    color: `${commonColors.black}!important`,
} );