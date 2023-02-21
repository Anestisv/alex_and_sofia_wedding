import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslation } from 'react-i18next';
import { commonColors } from '../../assets/design/CommonColors';
import { Fade } from "react-awesome-reveal";


export const ContactDetails = () => {

    const { i18n } = useTranslation( ["translation"] );
    const contactDetails = i18n.t( "translation:contact.contact_details", { returnObjects: true } )

    return(
        <Grid pb={15} container direction="row" columns={{ xs: 12, sm: 12, md: 6, lg: 3, xl: 6 }} justifyContent="space-evenly" alignItems="center" style={{ textAlign: 'center', backgroundColor: commonColors.back_bez }}>
            <Fade direction={'up'} duration={2000} fraction={1} triggerOnce>
                {contactDetails.map( ( person, index ) => (
                    <Grid item sm container direction="column" sx={{ padding: '2rem 0!important' }} key={index}>
                        <Grid item sx={{ padding: '0!important' }} >
                            <Typography gutterBottom variant="body1" sx={{ color: commonColors.title_brown, fontSize: '1.25rem', fontFamily: 'Alegreya-regular' }} >
                                {person.name}
                            </Typography>
                            <Detail detail={person.email} />
                            <Detail detail={person.tel} />
                        </Grid>
                        <Grid item sx={{ padding: '0!important', marginTop: '1rem' }} >
                            <LinkContainer>
                                <SocialLink href={person.facebook} icon={FacebookIcon} />
                                <SocialLink href={person.instagram} icon={InstagramIcon} />
                            </LinkContainer>
                        </Grid>
                    </Grid>
                ) )}
            </Fade>
        </Grid>
    )
}

const Detail = ({detail}) => {
    return (
        <Typography variant="body1" gutterBottom sx={{ fontSize: '1.05rem', fontFamily: 'Alegreya-light' }}>
            {detail}
        </Typography>
    )
}

const LinkContainer = styled( Box )( {
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    margin: 'auto',
} );

const SocialLink = ( props ) => {
    const { href, icon: Box } = props;

    return (
        <LinkItem href={href} target="_blank">
            <Box sx={{ p: 2, borderRadius: '50%', backgroundColor: commonColors.back_green, }} />
        </LinkItem>
    );
};

const LinkItem = styled( "a" )( {
    display: "block",
    margin: '0.5rem',

    "& svg": {
        color: commonColors.white,
        transition: "all 300ms ease-in-out",
    },

    "&:hover svg": {
        color: '#dddddd',
        backgroundColor: commonColors.title_green
    },
} );