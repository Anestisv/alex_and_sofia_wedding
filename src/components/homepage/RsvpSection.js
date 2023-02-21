import React from "react";
import Typography from '@mui/material/Typography';
import { VerticalLine } from '../VerticalLine'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { SplitBox } from '../layouts/SplitBox';
import { HalfBox } from '../layouts/HalfBox';
import { useTranslation } from 'react-i18next';
import { commonColors } from '../../assets/design/CommonColors';
import { Fade } from "react-awesome-reveal";


export const RsvpSection = () => {

    const { t } = useTranslation( ["translation"] );

    return (
        <SplitBox>
            <HalfBox bgColor={commonColors.back_bez}>
                <Fade direction={'down'} duration={1500} fraction={1} triggerOnce>
                    <ConfirmText text={t( "translation:homepage.please_confirm_your_attendance" )} />
                </Fade>
                <Button variant="contained" sx={buttonStyles} >
                    <Link to="/rsvp" style={{ textDecoration: 'none', color: commonColors.white, padding: '0', }}>{t( "translation:homepage.rsvp_now" )}</Link>
                </Button>
            </HalfBox>
            <HalfBox bgColor={commonColors.back_brown} justifyContent={'space-between'}>
                <Fade direction={'down'} duration={1500} fraction={1} triggerOnce>
                    <CommitText text={t( "translation:homepage.ready_to_commit" )} />
                </Fade>
                <Fade reverse={false} duration={3000} fraction={1} triggerOnce>
                    <VerticalLine borderColor={commonColors.white} height={'4rem'} />
                </Fade>
                <Fade direction={'up'} duration={1500} fraction={1} triggerOnce>
                    <RsvpText text={t( "translation:homepage.rsvp" )} spantext={t( "translation:homepage.pls" )} />
                </Fade>
            </HalfBox>
        </SplitBox>
    )
}

const buttonStyles = {
    backgroundColor: commonColors.back_green,

    "&:hover": {
        backgroundColor: "rgba( 142, 171, 166, 0.8 )"
    }
}

const ConfirmText = ({text}) => {
    return (
        <Typography variant='body1' align="center" sx={{ color: commonColors.title_brown, fontFamily: 'Noto-regular', paddingBottom: '2rem' }}>
            {text}
        </Typography>
    )
}
const CommitText = ({text}) => {
    return (
        <Typography variant='h5' mb={4} sx={{ color: commonColors.white, fontFamily: 'Alegreya-regular', fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.825rem' } }}>
            {text}
        </Typography>
    )
}

const RsvpText = ({text, spantext}) => {
    return (
        <Typography variant='h1' mt={4} sx={{ color: commonColors.white, fontFamily: 'Noto-italic', fontSize: { xs: '4rem', sm: '4rem', md: '5.3125rem', lg: '6.875rem' } }}>
            <span style={{ color: commonColors.letter_green }}>{spantext}</span>{text}
        </Typography>
    )
}

