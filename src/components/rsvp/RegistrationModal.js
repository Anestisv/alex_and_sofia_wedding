import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { commonColors } from '../../assets/design/CommonColors';
import Typography from '@mui/material/Typography';
import { RegistrationForm } from '../form/RegistrationFrom';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from "react-i18next";
import { Notification } from '../form/Notification';


export const RegistrationDialog = ( {open, setOpen} ) => {
    
    const { t } = useTranslation( ["translation"] );
    const theme = useTheme();
    const fullScreen = useMediaQuery( theme.breakpoints.down( 'sm' ) );

    const handleClose = () => {
        setOpen( false );
    };


    const [openSnack, setOpenSnack] = useState( false );
    const [message, setMessage] = useState( "" );
    const [success, setSuccess] = useState(true)


    return (
        <>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                sx={{ textAlign: 'center', backgroundColor: 'rgba(161, 144, 132, 0.8)' }}
            >
                <DialogActions sx={{ backgroundColor: commonColors.back_bez }}>
                    <IconButton aria-label="close" onClick={handleClose} sx={{color:commonColors.title_green}}>
                        <CloseIcon color='inherit'/>
                    </IconButton>
                </DialogActions>
                <DialogTitle id="responsive-dialog-title" sx={{ py: 0, whiteSpace: 'pre-line', fontFamily: 'Alegreya-regular', textAlign: 'center', backgroundColor: commonColors.back_bez, color: commonColors.title_green }}>
                    <span style={{ fontSize: 'xx-large' }}>{t( "translation:dialog.names" )}</span>
                    <Divider flexItem sx={{borderColor: commonColors.back_brown, width: 'auto', maxWidth: '300px', margin: '0 auto!important' }} >
                        <Bullet />
                    </Divider>
                    {t("translation:dialog.date")}
                    <Divider flexItem sx={{ borderColor: commonColors.back_brown, width: 'auto', maxWidth: '300px', margin: '0 auto!important' }} >
                        <Bullet />
                    </Divider>
                </DialogTitle>
                <DialogContent sx={{ justifyContent: 'center', backgroundColor: commonColors.back_bez, color: commonColors.title_green }}>
                    <DialogContentText sx={{ fontFamily: 'Alegreya-regular' }}>
                        {t( "translation:dialog.add_your_details" )}
                    </DialogContentText>
                    <RegistrationForm handleClose={handleClose} setOpenSnack={setOpenSnack} setMessage={setMessage} />
                </DialogContent>
            </Dialog>
            <Notification open={openSnack} setOpenSnack={setOpenSnack} message={message} success={success} setSuccess={setSuccess} />
        </>
    );
}


const Bullet = () => {

    const bullet = '\u2022'

    return (
        <Typography variant='body1' sx={{ fontFamily: 'Noto-regular' }} >{bullet}</Typography>
    )
}