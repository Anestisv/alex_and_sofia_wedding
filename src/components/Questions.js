import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Trans, useTranslation } from 'react-i18next';
import { commonColors } from '../assets/design/CommonColors';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { allRoutes } from '../assets/routes';


export const Questions = () => {

    const { i18n } = useTranslation( ["translation"] );
    
    return (
        <Box textAlign="center" backgroundColor="#8EABA6" padding="1.5rem">
            <Typography variant='body1' sx={{ fontFamily: "Alegreya-light", fontSize: { xs: '0.75rem', sm: '1rem' }, letterSpacing: '0.225rem' }}>
            <span>
                {
                    <Trans
                        ns="translation"
                        i18nKey="questions.questions_text"
                        components={[
                            <LinkItem key={0} to={allRoutes.contact} />,
                            <span key={1} style={{ color: commonColors.back_bez, fontFamily: "Alegreya" }} />]
                        }
                    />
                }
            </span>
            </Typography>
        </Box>
    )
}

const LinkItem = styled( Link )( {
    color: `${commonColors.back_bez}!important`,

    "&:hover": {
        color: `${commonColors.black}!important`
    },
} );