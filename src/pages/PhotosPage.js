import { MainLayout } from '../components/layouts/MainLayout';
import { IntroSection } from '../components/photos/IntroSection'
import { IntroImageSection } from '../components/photos/IntroImageSection';
import { StorySection } from '../components/photos/StorySection';
import { ImagesCollection } from '../components/photos/ImagesCollection';
import { RingImage } from '../assets/gallery/index';
import { useEffect } from 'react';
import { commonColors } from '../assets/design/CommonColors';


export const PhotosPage = () => {

    useEffect( () => {
        document.title = 'Alex and Sofia | PHOTOS';
    } );

    return (
        <MainLayout bgColor={commonColors.back_bez}>
            <IntroSection />
            <IntroImageSection src={RingImage}  />
            <StorySection />
            <ImagesCollection />
        </MainLayout>
    );
}
