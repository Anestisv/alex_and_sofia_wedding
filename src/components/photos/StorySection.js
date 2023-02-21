import Box from '@mui/material/Box';
import { commonColors } from '../../assets/design/CommonColors';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Fade } from "react-awesome-reveal";


export const StorySection = () => {

    const { i18n } = useTranslation( ["translation"] );
    const story = i18n.t( "translation:photos.story", { returnObjects: true } )

    return (
            <StoryBox>
            <Fade direction={'up'} cascade damping={0.5} big={false} reverse={false} fraction={1} triggerOnce>
                {story.map( ( par, index ) => (
                    <Typography variant='body1' sx={{ color: commonColors.black, fontFamily: 'Alegreya-light', fontSize: '1rem', paddingBottom: '1em' }} key={index} >
                        {par}
                    </Typography>
                ))}
            </Fade>
            </StoryBox>
    )
}

const StoryBox = styled(Box)({
    textAlign: 'left',
    margin: '5rem auto',
    padding: '0 3rem',
    maxWidth: '450px',
})