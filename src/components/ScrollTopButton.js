import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { commonColors } from '../assets/design/CommonColors';


export const ScrollTopButton = () => {
    const trigger = useScrollTrigger();

    const handleClick = () => {
        document.documentElement.scrollTo( {
            top: 0,
            left: 0,
            behavior: 'smooth'
        } );
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                <Fab size="small" aria-label="scroll back to top" sx={{ backgroundColor: commonColors.back_brown, "&:hover": { backgroundColor: 'rgba( 161, 144, 132, 0.5 )' } }}>
                    <KeyboardArrowUpIcon sx={{color: commonColors.white}}/>
                </Fab>
            </Box>
        </Fade>
    );
}