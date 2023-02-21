import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { commonColors } from '../../assets/design/CommonColors';


export const WTextField = styled( TextField, {
    shouldForwardProp: ( props ) => props !== "focuscolor"
} )( ( p ) => ( {
    // input label when focused
    "& label.Mui-focused": {
        color: p.error ? commonColors.warning : p.focuscolor
    },
    //
    "& label.Mui-error": {
        color: p.error ? commonColors.warning : p.focuscolor
    },
    // focused color for input with variant='standard'
    "& .MuiInput-underline:after": {
        borderBottomColor: p.error ? commonColors.warning : p.focuscolor
    },
    // focused color for input with variant='filled'
    "& .MuiFilledInput-underline:after": {
        borderBottomColor: p.error ? commonColors.warning : p.focuscolor
    },
    // Error helptext
    "& .MuiFormHelperText-root.Mui-error": {
        color: commonColors.warning
    },
    // focused color for input with variant='outlined'
    "& .MuiOutlinedInput-root": {
        borderColor: p.error ? commonColors.warning : p.focuscolor,

        "&.Mui-focused fieldset": {
            borderColor: p.error ? commonColors.warning : p.focuscolor
        },
        "&.Mui-active fieldset": {
            borderColor: p.error ? commonColors.warning : p.focuscolor
        },
    },
}));
