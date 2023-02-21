import React, { useEffect } from "react";
import { MainLayout } from '../components/layouts/MainLayout';
import { PromoSection } from "../components/homepage/PromoSection";
import { ScheduleSection } from "../components/homepage/ScheduleSection";
import { RsvpSection } from "../components/homepage/RsvpSection";
import { OurStoySection } from "../components/homepage/OurStorySection";


export const HomePage = () => {

    useEffect( () => {
        document.title = 'Alex and Sofia | HOME';
    } );

    return (
        <MainLayout>
            <PromoSection />
            <ScheduleSection  />
            <RsvpSection />
            <OurStoySection />
        </MainLayout>
    );
}