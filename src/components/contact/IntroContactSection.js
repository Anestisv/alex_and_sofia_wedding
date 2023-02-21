import Box from '@mui/material/Box';
import { VerticalLine } from '../VerticalLine';
import { commonColors } from '../../assets/design/CommonColors';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from "../../assets/design/theme";
import styled from 'styled-components';
import { Fade } from "react-awesome-reveal";


export const IntroContactSection = () => {

    const { t } = useTranslation( ["common", "translation"] );
    const isMobile = useIsMobile();

    return (
        <IntroContactWrapper>
            <Fade direction={'down'} duration={2000} fraction={1} triggerOnce>
                <Box mt={3}>
                    <VerticalLine borderColor={commonColors.back_green} height={isMobile ? '4rem' : '6rem'} />
                </Box>
            </Fade>
            <IntroContactBox>
                <Fade direction={'down'} duration={2500} fraction={1} triggerOnce>
                    <Typography variant="h1" gutterBottom sx={{ color: commonColors.title_green, fontFamily: 'Noto-regular', fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', } }}>
                        {t( "translation:contact.contact" )}
                    </Typography>
                    <Typography variant='body1' sx={{ color: commonColors.title_brown, fontFamily: 'Alegreya-regular', fontSize: '1.25rem' }}>
                        {t( "translation:contact.contact_text" )}
                    </Typography>
                </Fade>
            </IntroContactBox>
        </IntroContactWrapper>
    )
}

const IntroContactWrapper = styled( Box )( {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: commonColors.back_bez
} )

const IntroContactBox = styled( Box )( {
    textAlign: 'center',
    margin: '3rem auto',
    maxWidth: '400px',
    padding: '0 4rem',
} )