import { commonColors } from "../assets/design/CommonColors"
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { HomeImage } from '../assets/gallery/index';
import styled from "styled-components";
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

export const NotFoundPage = () => {

    const { t } = useTranslation( ["common", "translation"] );

    useEffect( () => {
        document.title = 'Alex and Sofia';
    } );

    return (
        <NotFoundLayout>
                <NotFoundWrapper>
                    <NotFoundImage src={HomeImage} />
                    <NotFoundTextWrapper>
                        <OupsText name={t("common:oups")} />
                        <SorryText name={t("translation:not_found.sorry_text")} />
                    </NotFoundTextWrapper>
                    <Button variant="contained" sx={buttonStyles}>
                        <Link to={'/'} style={{ color: 'inherit', textDecoration: 'none' }}>{t("translation:not_found.go_to_home_page")}</Link>
                    </Button>
                </NotFoundWrapper>
        </NotFoundLayout>
    )
}


const NotFoundLayout = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    WebkitBoxPack: 'center', 
    justifyContent: 'center'
})

const NotFoundWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative'
})

const NotFoundImage = styled( 'img' )( {
    alt: 'Crown of leaves',
    transform: "rotate(90deg)",
    width: "60%",

    '@media( max-width: 400px)': {
        width: "85%",
        transform: "rotate(0deg)",
    }
} )

const NotFoundTextWrapper = styled( 'div' )( {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate( -40%, -95%)',

    '@media( max-width: 400px)': {
        transform: 'translate( -50%, -100%)',
    }
} )

const buttonStyles = {
    backgroundColor: commonColors.back_green,
    margin: '1rem 0 3rem',

    "&:hover": {
        backgroundColor: "rgba( 142, 171, 166, 0.8 )"
    }
}

const OupsText = ( { name } ) => {

    return (
        <Typography
            variant='h4'
            sx={{
                color: commonColors.back_brown,
                fontFamily: 'Noto-regular',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.75rem' }
            }}
        >
            {name}
        </Typography>
    )
}

const SorryText = ( { name } ) => {

    return (
        <Typography
            variant='h4'
            mt={3}
            sx={{
                color: commonColors.back_brown,
                fontFamily: 'Noto-regular',
                fontSize: { xs: '1rem', sm: '1.5rem', md: '2.25rem', lg: '2.5rem' }
            }}
        >
            {name}
        </Typography>
    )
}