import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { useIsMobile } from "../../assets/design/theme";
import { HomeImage } from '../../assets/gallery/index';
import { commonColors } from '../../assets/design/CommonColors';
import { Fade } from "react-awesome-reveal";


export const PromoSection = () => {

    const { t } = useTranslation( ["common", "translation"] );
    const isMobile = useIsMobile();

    return (
        <PromoWrapper>
            <Fade direction={'down'} duration={2000} fraction={1} triggerOnce>
                <WecomeText />
            </Fade>
            <Box sx={{ position: 'relative' }}>
                <PromoImage src={HomeImage} alt={'Crown of leaves'} />
                <PromoTextWrapper>
                    <Fade direction={'up'} duration={2000} fraction={1} triggerOnce>
                        <NamesText name={t( "common:homepage.alex" )} />
                        <AndText text={t( "common:homepage.and" )} />
                        <NamesText name={t( "common:homepage.sofia" )} />
                    </Fade>
                </PromoTextWrapper>
            </Box>
            <SaveTheDate text={t( "common:save_the_date" )} />
            {isMobile ? <MobileLayout /> : <DesktopLayout />}
        </PromoWrapper>
    )
}

const PromoWrapper = styled( Box )({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: commonColors.white,
} )

const WecomeText = () => {

    const { t } = useTranslation( ["translation"] );

    return (
        <Typography
            variant='body1'
            sx={{
                paddingTop: "2rem",
                fontFamily: 'Alegreya-light',
                fontSize: { xs: '1rem', sm: '1.25rem' }
            }}
        >
            {t( "translation:homepage.welcome_text" )}
        </Typography>
    )
}

const PromoImage = styled( 'img' )( {
    transform: "rotate(90deg)",
    width: "50%",

    '@media( max-width: 400px)': {
        width: "85%",
        transform: "rotate(0deg)",
    }
} )

const PromoTextWrapper = styled( 'div' )( {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate( -45%, -50%)',

    '@media( max-width: 400px)': {
        transform: 'translate( -50%, -55%)',
    }
} )

const NamesText = ({name}) => {

    return(
        <Typography
            variant='h2'
            sx={{
                fontFamily: 'Roboto-thin',
                fontSize: { xs: '2.25rem', sm: '2.5rem', md: '3.75rem' }
            }}
        >
            {name}
        </Typography>
    )
}

const AndText = ({text}) => {

    return (
        <Typography
            variant='body1'
            sx={{
                fontFamily: 'Sacramento, cursive',
                fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem' }
            }}
        >
            {text}
        </Typography>
    )
}

const SaveTheDate = ({text}) => {
    
    return (
        <Box>
            <Typography
                variant='h2'
                mb={1}
                mx={1}
                textAlign='center'
                sx={{
                    fontFamily: 'Roboto-thin',
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                    letterSpacing: { xs: '0.35rem', sm: '0.75rem', md: '1rem' }
                }}
            >
                {text}
            </Typography>
        </Box>
    )
}
const MobileLayout = () => {

    const { t } = useTranslation( ["common", "translation"] );

    return (
        <DateAndTextWrapper direction={'column'}>
            <NumericDate text={t( "translation:homepage.date" ).split( ',' )[1]} color={commonColors.back_brown} />
            <Box sx={{ display: 'flex', alignItems: 'center' }} >
                <Fade cascade damping={0.3} direction={'up'} fraction={1} triggerOnce>
                    <TwoDrunkText text={t( "common:homepage.two_become_one" )} />
                    <Bullet color={commonColors.back_brown} />
                    <TwoDrunkText text={t( "common:homepage.all_become_drunk" )} />
                </Fade>
            </Box>
        </DateAndTextWrapper>
    )
}

const DesktopLayout = () => {

    const { t } = useTranslation( ["common", "translation"] );

    return (
        <DateAndTextWrapper direction={'row'} >
            <Fade cascade damping={0.3} direction={'up'} fraction={1} triggerOnce>
                <TwoDrunkText text={t( "common:homepage.two_become_one" )} />
                <Bullet color={commonColors.back_brown} />
                <NumericDate text={t( "translation:homepage.date" ).split( ',' )[1]} color={commonColors.back_brown} />
                <Bullet color={commonColors.back_brown} />
                <TwoDrunkText text={t( "common:homepage.all_become_drunk" )} />
            </Fade>
        </DateAndTextWrapper>
    )
}

const DateAndTextWrapper = styled( Box )( props => ( {
    display: 'flex',
    flexDirection: props.direction,
    alignItems: 'center',
    marginBottom: '2rem'
} ) )

const TwoDrunkText = ({text}) => {

    const isMobile = useIsMobile();

    return (
        <Typography
            variant='body1'
            textAlign='center'
            sx={{
                fontFamily: 'Alegreya-light',
                fontSize: isMobile ? '0.875rem' : '1rem'
            }}
        >
            {text}
        </Typography>
    )
}

const NumericDate = ({text, color}) => {

    return (
         <Typography
            variant='h4'
            sx={{
                fontFamily: 'Noto-regular',
                fontSize: {xs: '2.25rem', sm:'2.75rem', lg: '3.5rem' },
                color: color
            }}
        >
            {text}
        </Typography>
    )
}

const Bullet = ({color}) => {

    const bullet = '\u2022'

    return (
        <Typography
            variant='body1'
            sx={{
                fontWeight: '200',
                fontSize: { xs: '0.75rem', sm: '1.25rem', },
                color: color,
                margin: '0 1rem'
            }}
        >
            {bullet}
        </Typography>
    )
}
