import styled from 'styled-components';
import Box from '@mui/material/Box';
import { InfoImage } from '../../assets/gallery/index'


export const InfoImageSection = styled(Box)({
    perspective: '1px',
    height: '70vh',
    overflowX: 'hidden',
    overflowY: 'auto',
    backgroundImage: `url(${InfoImage})`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#FFFFFF',
    opacity: '0.5',

    '@media( max-width: 700px)': {
        height: '50vh',
    }
})
