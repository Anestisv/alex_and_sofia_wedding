import { Snackbar, SnackbarContent} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { commonColors } from "../../assets/design/CommonColors";

export const Notification = ({message, open, setOpenSnack, success }) => {

        const handleNotificationClose = () => {
            setOpenSnack(false)
        }

        const action = (
                <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={handleNotificationClose}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
        );

        return (
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleNotificationClose}
            >
                <SnackbarContent
                    style={{ backgroundColor: success ? commonColors.back_green : commonColors.warning }}
                    message={message}
                    action={action} />
            </Snackbar>
        )
}