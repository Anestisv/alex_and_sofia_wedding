import { MainLayout } from '../components/layouts/MainLayout';
import { InfoSection } from '../components/details/InfoSection'
import { TransAccSection } from '../components/details/TransAccSection';
import { InfoImageSection } from '../components/details/InfoImageSection';
import { ScheduleSection } from '../components/details/ScheduleSection';
import Map from '../components/Map';
import { useEffect } from 'react';

export const DetailsPage = () => {

    useEffect( () => {
        document.title = 'Alex and Sofia | DETAILS';
    } );

    return (
        <MainLayout>
            <InfoSection />
            <TransAccSection />
            <InfoImageSection />
            <ScheduleSection />
            <Map />
        </MainLayout>
    );
}