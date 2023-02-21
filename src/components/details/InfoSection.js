import Box from '@mui/material/Box';
import { VerticalLine } from '../VerticalLine';
import { commonColors } from '../../assets/design/CommonColors';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from "../../assets/design/theme";
import styled from 'styled-components';
import { Fade } from "react-awesome-reveal";

export const InfoSection = () => {

    const { t } = useTranslation( ["common", "translation"] );
    const isMobile = useIsMobile();

    return (
        <InfoWrapper>
            <Box mt={3}>
                <Fade direction={'down'} duration={2000} fraction={1} triggerOnce >
                    <VerticalLine borderColor={commonColors.back_green} height={isMobile ? '4rem' : '6rem'} />
                </Fade>
            </Box>
            <InfoBox>
                <Fade direction={'down'} duration={2500} fraction={1} triggerOnce >
                    <Typography variant="h1" gutterBottom sx={{ color: commonColors.title_green, fontFamily: 'inherit', fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', } }}>
                        {t("common:details.info")}
                    </Typography>
                </Fade>
                <Fade direction={'up'} duration={2000} fraction={1} triggerOnce>
                    <Typography variant='body1' sx={{ color: commonColors.title_brown, fontFamily: 'inherit',  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, }}>
                        {t("translation:details.info_text")}
                    </Typography>
                </Fade>
            </InfoBox>
        </InfoWrapper>
    )
}

const InfoWrapper = styled(Box)({
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: commonColors.back_bez
})

const InfoBox = styled(Box)({
    textAlign: 'center',
    margin: '3rem auto',
    maxWidth: '620px',
    padding: '0 4rem 4rem',
    fontFamily: 'Noto-regular'
})