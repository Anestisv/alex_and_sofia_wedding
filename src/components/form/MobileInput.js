import { useState, useCallback } from "react";
import { Box } from "@mui/material";
import { commonColors } from '../../assets/design/CommonColors';
import { WTextField } from './utils';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import LanguageIcon from '@mui/icons-material/Language';
import Tooltip from '@mui/material/Tooltip';
import { CountryCodeMenu } from './CountryCodeMenu';
import { removeCountryCode, setCountryCode, isValidNumber } from './helpers';
import { useTranslation } from "react-i18next";


export const MobileInput = ( { value, onChange, setMobile, onError }) => {
    const { t } = useTranslation( ["common", "translation"] );

    const [error, setError] = useState( null );

    const handleError = useCallback(
        ( error ) => {
            setError( error );
            onError( Boolean( error ) );
        },
        [onError]
    );

    const handleChange = useCallback( 
        (e) => {
            let number = e.target.value;
            const cc = setCountryCode(number)
            number = removeCountryCode( number );

            if ( number.trim().length === 0 || !number) {
                handleError( t( "translation:form.errors.mobile_errors.number_is_required" ) );
            } else if ( !isValidNumber(number) ) {
                handleError( t( "translation:form.errors.mobile_errors.provide_valid_number" ) )
            } else if (cc === null) {
                handleError( t( "translation:form.errors.mobile_errors.provide_valid_country_code" ) )
            } else {
                handleError("")
            }
            onChange( e );
        }, [onChange, handleError, t]
    )


    const [openMenu, setOpenMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean( openMenu);
    
    
    const handleClick = (event) => {
        setAnchorEl( event.currentTarget );
        setOpenMenu(true);
    };
    const handleClose = (code) => {
        setMobile(code)
        setAnchorEl( null );
        setOpenMenu( false );
    };

    return (
        <Box display="flex" flexWrap="wrap" alignItems="center" >
            <WTextField
                focuscolor={commonColors.back_green}
                label={t("translation:form.labels.mobile")}
                type="tel"
                placeholder={t("common:form.placeholders.xxx")}
                fullWidth
                autoComplete={'tel'}
                error={!!error}
                helperText={error ? error : " "}
                value={value}
                onChange={handleChange}
                required
                InputProps={{
                    endAdornment: 
                        <InputAdornment position="start">
                            <Tooltip title={t("translation:form.tooltip.pick_country_code")} enterDelay={800} leaveDelay={200} placement="bottom-end">
                                <IconButton
                                    aria-label="toggle country code menu visibility"
                                    id="menu-country-codes"
                                    onClick={handleClick}
                                    edge="end"
                                    aria-controls={open ? 'menu-country-codes' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <LanguageIcon />
                                </IconButton>
                            </Tooltip>
                            <CountryCodeMenu open={open} handleClose={handleClose} anchorEl={anchorEl} />
                        </InputAdornment>,

                    }
                }
            />
        </Box>
    );
};
