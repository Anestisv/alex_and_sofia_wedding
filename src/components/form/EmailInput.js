import { useState, useCallback } from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { commonColors } from '../../assets/design/CommonColors';
import { WTextField } from './utils';
import { isValidEmail } from './helpers';


export const EmailInput = ( { value, onChange, onError } ) => {
    const { t } = useTranslation( ["common", "translation"] );
    
    const [error, setError] = useState("");

    const handleError = useCallback(
        ( error ) => {
            setError( error );
            onError( Boolean( error ) );
        },
        [onError]
    );

    const handleChange = useCallback(
        (e) => {
            
            const val = e.target.value;
            
            if ( val.trim().length === 0 ) {
                handleError( t( "translation:form.errors.email_errors.email_is_required" ) );
            } else if ( !isValidEmail( val ) ) {
                handleError( t( "translation:form.errors.email_errors.provide_valid_email" ) );
            } else {
                handleError( "" );
            }

            onChange( e );

        }, [onChange, handleError, t]
    )


    return (
        <Box display="flex" flexWrap="wrap" alignItems="center">
            <WTextField
                focuscolor={commonColors.back_green}
                label={t("common:form.email")}
                type="text"
                placeholder={t("common:form.placeholders.i_will_be_there")}
                fullWidth
                autoComplete="new email"
                error={!!error}
                helperText={error ? error : " "}
                value={value}
                onChange={handleChange}
                required
            />
        </Box>
    );
};
