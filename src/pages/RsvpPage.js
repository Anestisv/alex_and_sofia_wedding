import React, { useEffect } from "react";
import { MainLayout } from "../components/layouts/MainLayout";
import { IntroRsvpSection } from '../components/rsvp/IntroRsvpSection';
import { TimeAndLocation } from '../components/rsvp/TimeAndLocation';
import Map from '../components/Map';


export const RsvpPage = () => {

    useEffect( () => {
        document.title = 'Alex and Sofia | RSVP';
    } );

    return (
        <MainLayout>
            <IntroRsvpSection />
            <TimeAndLocation />
            <Map />
        </MainLayout>
    )
}