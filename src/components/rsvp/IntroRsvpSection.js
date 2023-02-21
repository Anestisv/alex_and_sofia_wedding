import { useState } from 'react';
import { commonColors } from '../../assets/design/CommonColors';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { RegistrationDialog } from "./RegistrationModal";
import { Fade } from "react-awesome-reveal";


export const IntroRsvpSection = () => {

    const { t } = useTranslation( ["common", "translation"] );

    const [open, setOpen] = useState( false );

    const handleClickOpen = () => {
        setOpen( true );
    };
    

    return (
        <IntroWrapper>
            <Fade direction={'down'} duration={2000} fraction={1} triggerOnce>
                <LetterBox>
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly'}}>
                        <Typography variant='body1' sx={{ color: commonColors.black, fontFamily: 'Alegreya-regular', fontSize: '1.25rem', paddingLeft: '1rem' }}>
                            {t( "translation:rsvp.date" )}
                        </Typography>
                        <Divider orientation="vertical" flexItem sx={{ borderColor: commonColors.black }}/>
                        <Typography variant='body1' sx={{ color: commonColors.black, fontFamily: 'Alegreya-regular', fontSize: '1.25rem' }}>
                            {t( "translation:rsvp.ktima_dikaioulia" )}
                        </Typography>
                    </Box>
                    <Typography variant="h1" gutterBottom sx={{ color: commonColors.title_brown, fontFamily: 'Playfair-regular', fontSize: {xs: '3.25rem', md:'3.75rem'} }}>
                        {t( "translation:rsvp.names" )}
                    </Typography>
                    <Typography variant='body1' sx={{ color: commonColors.black, fontFamily: 'Alegreya-regular', fontSize: '1.25rem' }}>
                        {t( "translation:rsvp.please_confirm_your_attendance" )}
                    </Typography>
                </LetterBox>
            </Fade>
            <Fade direction={'down'} duration={2500} fraction={1} triggerOnce>
                <Button onClick={handleClickOpen} variant="contained" sx={buttonStyles} >
                    {t( "translation:rsvp.register_now" )}
                </Button>
            </Fade>
            <RegistrationDialog open={open} setOpen={setOpen} />
        </IntroWrapper>
    )
}

const IntroWrapper = styled( Box )( {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: commonColors.back_bez,
    textAlign: 'center',
} )

const LetterBox = styled( Box )( {
    textAlign: 'center',
    margin: '3rem auto',
    maxWidth: '620px',
} )

const buttonStyles = {
    backgroundColor: commonColors.back_green,
    margin: '1rem 0 3rem',

    "&:hover": {
        backgroundColor: "rgba( 142, 171, 166, 0.8 )"
    }
}