import { commonColors } from '../../assets/design/CommonColors';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import { Fade } from "react-awesome-reveal";


export const TimeAndLocation = () => {

    const { t } = useTranslation( ["common", "translation"] );

    return (
        <IntroWrapper>
            <Fade direction={'up'} duration={2500} fraction={1} triggerOnce>
                <LetterBox>
                    <Typography variant="h2" gutterBottom sx={{ color: commonColors.title_brown, fontFamily: 'Playfair-regular', fontSize: '1.875rem' }}>
                        {t( "translation:rsvp.time_and_location" )}
                    </Typography>
                    <DateAndAddress text={t( "translation:rsvp.full_date" )} />
                    <DateAndAddress text={t( "translation:rsvp.full_address" )} />
                </LetterBox>
            </Fade>
        </IntroWrapper>
    )
}

const IntroWrapper = styled( Box )( {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: commonColors.white,
    textAlign: 'center',
} )

const LetterBox = styled( Box )( {
    textAlign: 'center',
    margin: '3rem auto',
    maxWidth: '620px',
    padding: '0 4rem',
} )

const DateAndAddress = ({text}) => {

    return (
        <Typography variant='body1' sx={{ color: commonColors.black, fontFamily: 'Alegreya-regular', fontSize: '1.25rem' }}>
            {text}
        </Typography>
    )
}