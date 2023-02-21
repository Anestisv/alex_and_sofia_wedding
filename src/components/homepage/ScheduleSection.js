import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { VerticalLine } from '../VerticalLine'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { SplitBox } from '../layouts/SplitBox';
import { HalfBox } from '../layouts/HalfBox';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { useTranslation } from 'react-i18next';
import { commonColors } from '../../assets/design/CommonColors';
import { allRoutes } from '../../assets/routes';
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";


export const ScheduleSection = () => {

    const { t, i18n } = useTranslation( ["translation"] );

    const events = i18n.t( "translation:homepage.events", { returnObjects: true } )

    return (
        <SplitBox>
            <HalfBox bgColor={commonColors.back_green} justifyContent={'space-between'}>
                <Fade direction={'down'} duration={1500} triggerOnce delay={1000}>
                    <H5 text={t( "translation:homepage.join_us" )} />
                </Fade>
                <Fade reverse={false} duration={3000} triggerOnce delay={1000} >
                    <VerticalLine borderColor={commonColors.white} height={'4rem'} />
                </Fade>
                <Fade direction={'up'} duration={1500} triggerOnce delay={1000} >
                    <H1 text={t( "translation:homepage.where_and_when" )} />
                </Fade>
            </HalfBox>
            <HalfBox bgColor={commonColors.white} justifyContent={'space-between'}>
                <Fade direction={'up'} fraction={1} duration={1500} triggerOnce >
                    <Typography variant='h4' sx={{ fontFamily: 'Alegreya-regular', fontSize: '2rem' }}>
                        {t( "translation:homepage.date" )}
                    </Typography>
                </Fade>
                <Fade direction={'up'} fraction={1} duration={3000} triggerOnce >
                    <Typography variant='body1' mt={2} sx={{ fontFamily: 'Alegreya-light', fontSize: '1.125rem' }}>
                        {t( "translation:homepage.address" )}
                    </Typography>
                </Fade>
                <Box mt={1}>
                    {events.map( ( event, index ) => (
                        <Fade direction={'left'} duration={1500 + index * 1500} fraction={1} key={index} triggerOnce>
                            <EventText event={event} key={index} />
                        </Fade>
                    ) )}
                </Box>
                <Fade direction={'up'} duration={2000} fraction={1} triggerOnce>
                    <Button variant="text" color="inherit" sx={{ marginTop: '2rem' }} endIcon={<TrendingFlatIcon />}>
                        <LinkItem to={allRoutes.details} >{t( "translation:homepage.see_full_details" )}</LinkItem>
                    </Button>
                </Fade>
            </HalfBox>
        </SplitBox>
    )
}

const H5 = ({text}) => {
    return (
        <Typography variant='h5' mb={4} sx={{ color: commonColors.white, fontFamily: 'Alegreya-regular', fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.825rem' } }}>
            {text}
        </Typography>
    )
}

const H1 = ({text}) => {
    return (
        <Typography variant='h1' mt={4} sx={{ color: commonColors.white, fontFamily: 'Noto-italic', fontSize: { xs: '4rem', sm: '4rem', md: '5.3125rem', lg: '6.875rem' } }}>
            {text}
        </Typography>
    )
}
const EventText = ({event}) => {
    return (
        <Typography variant='h4' align="left" mt={6} sx={{ color: commonColors.back_brown, fontFamily: 'Noto-regular', fontSize: '2rem' }}>
            {event}
        </Typography>
    )
}

const LinkItem = styled(Link) ({
    textDecoration: 'none',
    color: commonColors.black,
    padding: '0',
    fontFamily: 'Alegreya-light'
})