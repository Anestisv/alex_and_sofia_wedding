import { useState } from 'react';
import { EmailInput } from './EmailInput';
import { TextInput } from './TextInput';
import { MobileInput } from './MobileInput';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { commonColors } from '../../assets/design/CommonColors';
import { useTranslation } from "react-i18next";


export const RegistrationForm = ( { handleClose, setOpenSnack, setMessage, setSuccess } ) => {

    const { t } = useTranslation( ["common", "translation"] );

    const [firstName, setFirstName] = useState( "" );
    const [hasFirstNameError, setHasFirstNameError] = useState( false );
    const [lastName, setLastName] = useState( "" );
    const [hasLastNameError, setHasLastNameError] = useState( false );
    const [mobile, setMobile] = useState( "" );
    const [hasMobileError, setHasMobileError] = useState( false );
    const [email, setEmail] = useState( "" );
    const [hasEmailError, setHasEmailError] = useState( false );

    const handleFirstNameChange = e => {
        setFirstName( e.target.value )
    }

    const handleLastNameChange = e => {
        setLastName( e.target.value )
    }

    const handleMobileChange = e => {
        setMobile( e.target.value )
    }

    const handleEmailChange = e => {
        setEmail( e.target.value )
    }

    const hasError = hasFirstNameError || hasLastNameError || hasMobileError || hasEmailError;
    const hasNoValues = !firstName || !lastName || !mobile || !email;
    const disableSubmitButton = hasError || hasNoValues;

    

    const handleSubmit = async ( event ) => {
        event.preventDefault();
        let details = {
            name: firstName,
            last: lastName,
            mobile: mobile,
            email: email,
        }

        let response = await fetch( "/api/registration", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify( details ),
        } );
        let result = await response.json();

        handleClose();


        setOpenSnack( true )
        if (result.status === 200){
            setMessage(result.message)
            await fetch( "/api/confirmation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify( { email: details.email } ),
            } );
        } else if (result.status === 500){
            setSuccess( false )
            setMessage(result.message)
        }
    }

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > :not(style)': { m: 1, width: '300px' },
            }}
            noValidate
            onSubmit={handleSubmit}
        >
            <TextInput
                label={t( "translation:form.labels.first_name" )}
                value={firstName}
                onChange={handleFirstNameChange}
                onError={setHasFirstNameError}
            />
            <TextInput
                label={t( "translation:form.labels.last_name" )}
                value={lastName}
                onChange={handleLastNameChange}
                onError={setHasLastNameError}
            />
            <MobileInput
                value={mobile}
                onChange={handleMobileChange}
                setMobile={setMobile}
                onError={setHasMobileError}
            />
            <EmailInput
                value={email}
                onChange={handleEmailChange}
                onError={setHasEmailError}
            />
            <Button
                variant="contained"
                type='submit'
                sx={buttonStyles}
                disabled={disableSubmitButton}
            >
                {t( "common:form.submit" )}
            </Button>
        </Box>
    );
};


const buttonStyles = {
    backgroundColor: commonColors.back_green,
    padding: '1rem',

    "&:hover": {
        backgroundColor: "rgba( 142, 171, 166, 0.8 )"
    }
}