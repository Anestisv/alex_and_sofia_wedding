import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';


export const Footer = () => {

    const { t } = useTranslation( ["common"] );

    return (
        <Box textAlign="center" backgroundColor="#FFFFFF" padding="1rem">
            <Typography ariant='body1' sx={{ fontFamily: "Alegreya-light", fontSize: { xs: '0.75rem', sm: '1rem' }, }}>
                {t("common:footer")}
            </Typography>
        </Box>
    )
}