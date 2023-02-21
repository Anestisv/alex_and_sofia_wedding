import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { VerticalLine } from '../VerticalLine'
import { Link } from 'react-router-dom';
import { SplitBox } from '../layouts/SplitBox';
import { HalfBox } from '../layouts/HalfBox';
import { useTranslation, Trans } from 'react-i18next';
import { commonColors } from '../../assets/design/CommonColors';
import { LeavesImage } from '../../assets/gallery/index';
import styled from 'styled-components';
import { Fade } from "react-awesome-reveal";



export const TransAccSection = () => {

    const { t } = useTranslation( ["translation"] );

    return (
        <SplitBox>
            <HalfBox bgColor={commonColors.back_green} justifyContent={'flex-start'}>
                <Fade direction={'down'} duration={2000} fraction={1} triggerOnce>
                    <H5 heading={t( "translation:details.transportation" )} color={commonColors.title_bez} />
                </Fade>
                <Fade reverse={false} duration={3000} triggerOnce delay={1000} >
                    <VerticalLine borderColor={commonColors.title_bez} height={'3rem'} />
                </Fade>
                <Fade direction={'up'} duration={2000} fraction={1} triggerOnce>
                    <Typography variant='body1' sx={{ color: '#FFFFFF', fontFamily: 'Alegreya-regular', paddingTop: '2rem' }}>
                        {t( "translation:details.closest_airport_and_taxi" )}
                    </Typography>
                </Fade>
            </HalfBox>
            <HalfBox bgImage={`linear-gradient(to top right, #FDF6EB,rgba(235, 235, 235, 0.7), rgba(235, 235, 235, 0.2)), url(${LeavesImage})`}>
                <AccomodationBox >
                    <Fade direction={'down'} duration={2000} fraction={1} triggerOnce>
                        <H5 heading={t( "translation:details.accomodation" )} color={commonColors.title_brown} />
                    </Fade>
                    <Fade reverse={false} duration={3000} triggerOnce delay={1000} >
                        <VerticalLine borderColor={commonColors.back_brown} height={'3rem'} />
                    </Fade>
                    <Fade direction={'up'} duration={2000} fraction={1} triggerOnce>
                        <Typography variant='body1' sx={{ fontFamily: 'Alegreya-light', paddingTop: '2rem' }}>
                            <span>
                                {
                                    <Trans
                                        ns="translation"
                                        i18nKey="details.accomodation_text"
                                        components={
                                            <Link key={0} to={'https://www.booking.com/'} style={{ color: commonColors.black }} />
                                        }
                                    />
                                }
                            </span>
                        </Typography>
                    </Fade>
                </AccomodationBox>
            </HalfBox>
        </SplitBox>
    )
}

const AccomodationBox = styled( Box )( {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
} )

const H5 = ({heading, color}) => {
    return (
        <Typography variant='h5' sx={{ color: {color}, fontFamily: 'Alegreya-regular', paddingBottom: '2rem' }}>
            {heading}
        </Typography>
    )
}