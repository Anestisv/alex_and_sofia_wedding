import { useState, useCallback } from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { commonColors } from '../../assets/design/CommonColors';
import { WTextField } from './utils';
import { isValidName } from'./helpers';


export const TextInput = ( { label, value, onChange, onError }) => {
    const { t } = useTranslation( ["common", "translation"] );

    const [error, setError] = useState("")

    const handleError = useCallback(
        ( error ) => {
            setError( error );
            onError( Boolean(error) );
        },
        [onError]
    );

    const handleChange = useCallback(
        (e) => {

            const val = e.target.value;

            if ( val.trim().length === 0 ) {
                handleError(t("translation:form.errors.name_errors.name_is_required"));
            } else if ( !isValidName(val) ) {
                handleError( t( "translation:form.errors.name_errors.provide_valid_name" ) );
            } else {
                handleError("");
            }

            onChange( e );
            
        }, [onChange, handleError, t]
    )


    return (
        <Box display="flex" flexWrap="wrap" alignItems="center">
            <WTextField
                focuscolor={commonColors.back_green}
                label={label}
                type="text"
                placeholder={t("common:form.placeholders.your_name_here")}
                fullWidth
                autoComplete={'new name'}
                error={!!error}
                helperText={error ? error : " "}
                value={value}
                onChange={handleChange}
                required
            />
        </Box>
    );
};