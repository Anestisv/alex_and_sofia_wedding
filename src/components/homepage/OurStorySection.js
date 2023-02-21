import React from "react";
import Typography from '@mui/material/Typography';
import { VerticalLine } from '../VerticalLine'
import styled from "styled-components"
import { Link } from 'react-router-dom';
import { HalfBox } from '../layouts/HalfBox';
import { OurStoryImage } from '../../assets/gallery/index';
import { useTranslation } from 'react-i18next';
import { commonColors } from '../../assets/design/CommonColors';
import { allRoutes } from '../../assets/routes';
import { Fade } from "react-awesome-reveal";


export const OurStoySection = () => {

    const { t } = useTranslation( ["translation"] );

    return (
        <Link to={allRoutes.photos} style={{ textDecoration: 'none', padding: '0', }}>
            <OurStoryWrapper>
                <HalfBox bgColor={'transparent'}>
                    <Fade direction={'down'} duration={1500} fraction={1} triggerOnce>
                        <PhotoGalleryText text={t( "translation:homepage.photo_gallery" )} />
                    </Fade>
                    <Fade reverse={false} duration={3000} fraction={1} triggerOnce>
                        <VerticalLine borderColor={commonColors.white} height={'4rem'} />
                    </Fade>
                    <Fade direction={'up'} duration={1500} fraction={1} triggerOnce>
                        <OurStoryText text={t( "translation:homepage.our_story" )} />
                    </Fade>
                </HalfBox>
            </OurStoryWrapper>
        </Link>
    )
}

const OurStoryWrapper = styled( 'div' )( {
    backgroundImage: `url(${OurStoryImage})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
} )

const PhotoGalleryText = ({text}) => {
    return (
        <Typography variant='h5' mb={4} sx={{ color: commonColors.white, fontFamily: 'Alegreya-regular', fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.825rem' } }}>
            {text}
        </Typography>
    )
}

const OurStoryText = ({text}) => {
    return (
        <Typography variant='h1' mt={4} sx={{ color: commonColors.white, fontFamily: 'Noto-italic', fontSize: { xs: '4rem', sm: '4rem', md: '5.3125rem', lg: '6.875rem' } }}>
            {text}
        </Typography>
    )
}