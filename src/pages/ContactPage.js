import { MainLayout } from '../components/layouts/MainLayout';
import { IntroContactSection } from '../components/contact/IntroContactSection';
import { ContactDetails } from '../components/contact/ConactDetails';
import Map from '../components/Map';
import { useEffect } from 'react';

export const ContactPage = () => {

    useEffect( () => {
        document.title = 'Alex and Sofia | CONTACT';
    } );

    return (
        <MainLayout>
            <IntroContactSection />
            <ContactDetails />
            <Map />
        </MainLayout>
    );
}
