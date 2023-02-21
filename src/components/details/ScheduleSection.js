import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { VerticalLine } from '../VerticalLine'
import { SplitBox } from '../layouts/SplitBox';
import { HalfBox } from '../layouts/HalfBox';
import { useTranslation } from 'react-i18next';
import { commonColors } from '../../assets/design/CommonColors';
import { Fade } from "react-awesome-reveal";



export const ScheduleSection = () => {

    const { t, i18n } = useTranslation( ["translation"] );

    const events = i18n.t( "translation:details.events", { returnObjects: true } )

    return (
        <SplitBox>
            <HalfBox bgColor={commonColors.back_brown} >
                <Fade direction={'down'} duration={2000} fraction={1} triggerOnce>
                    <Typography variant='h5' mb={4} sx={{ color: commonColors.back_bez, fontFamily: 'Alegreya-regular', fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.825rem' } }}>
                        {t( "translation:details.schedule" )}
                    </Typography>
                </Fade>
                <Fade reverse={false} duration={3000} triggerOnce delay={1000} >
                    <VerticalLine borderColor={commonColors.back_bez} height={'4rem'} />
                </Fade>
                <Fade direction={'up'} duration={2000} fraction={1} triggerOnce>
                    <Box mt={6} px={2}>
                        <Typography variant='body1' sx={{ color: commonColors.back_bez, fontFamily: 'Alegreya-regular', fontSize: { xs: '1.25rem', md: '1.35rem' } }}>
                            {t( "translation:details.the_events_will_take_place" )}
                        </Typography>
                        <Typography variant='h3' sx={{ color: commonColors.letter_green, fontFamily: 'Noto-regular', fontSize: { xs: '2.5rem'} }}>
                            {t( "translation:details.ktima_dikaioulia" )}
                        </Typography>
                        <Typography variant='body1' pt={2} sx={{ color: commonColors.back_bez, fontFamily: 'Alegreya-regular', fontSize: { xs: '1.25rem', md: '1.35rem'} }}>
                            {t( "translation:details.address" )}
                        </Typography>
                    </Box>
                </Fade>
            </HalfBox>
            <HalfBox bgColor={commonColors.back_green}>
                <Fade cascade direction={'down'} damping={0.4} fraction={0.8} triggerOnce>
                {events.map( ( event, index ) => (
                    <Box key={index} >
                        <Box my={2} px={2}>
                            <Typography variant='h4' gutterBottom sx={{ color: commonColors.title_bez, fontFamily: 'Noto-regular', fontSize: { xs: '1.375rem', sm: '1.825rem', md: '2.5rem' } }}>
                                {event.time}
                            </Typography>
                            <Typography variant='body1' sx={{ color: commonColors.white, fontFamily: 'Alegreya-light', fontSize: { xs: '1.25rem', sm: '1.05rem' } }}>
                                {event.info}
                            </Typography>
                        </Box>
                        { index !== 3 &&
                            (
                                <Bullet color={commonColors.white} />
                            )
                        }
                    </Box>
                ) )}
                </Fade>
            </HalfBox>
        </SplitBox>
    )
}



const Bullet = ( { color } ) => {

    const bullet = '\u2022'

    return (
        <Typography variant='body1' sx={{ fontFamily: 'Noto-regular', color: color, }} >{bullet}</Typography>
    )
}

