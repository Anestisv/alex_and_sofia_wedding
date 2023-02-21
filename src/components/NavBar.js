import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from 'react-i18next';
import { commonColors } from '../assets/design/CommonColors';
import styled from 'styled-components';
import { allRoutes } from "../assets/routes";


const LogoText = 'A • S'

const ResponsiveAppBar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [langButton, setLangButton] = useState(null);

    const handleOpenNavMenu = ( event ) => {
        setAnchorElNav( event.currentTarget );
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenLanguageMenu = (event) => {
        setLangButton( event.currentTarget )
    };

    const handleCloseLanguageMenu = (event) => {
        if (event.currentTarget.textContent === 'ENGLISH'){
            i18n.changeLanguage('en')
        } else if ( event.currentTarget.textContent === 'ΕΛΛΗΝΙΚΑ' ) {
            i18n.changeLanguage( 'gr' )
        } else if ( event.currentTarget.textContent === 'SHQIPTARE' ) {
            i18n.changeLanguage( 'sq' )
        }
        setLangButton(null)
    };

    const { t, i18n } = useTranslation( ["common", "translation"] );
    const pages = i18n.t( "translation:navbar.pages", { returnObjects: true } )


    return (
        <AppBar position="fixed" color="inherit">
            <Container maxWidth="xxl" disableGutters >
                <Toolbar disableGutters sx={{ alignItems: 'center', justifyContent: 'space-between', padding: { xs: '0', md: '0 4rem' }, }}>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href={allRoutes.home}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Noto-regular',
                            fontWeight: '400',
                            letterSpacing: '.3rem',
                            color: commonColors.back_brown,
                            textDecoration: 'none',
                        }}
                    >
                        {LogoText}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean( anchorElNav )}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                textAlign: "center"
                            }}
                        >
                            {pages.map( ( page, index ) => (
                                <MenuStyledItem onClick={handleCloseNavMenu} key={index} >
                                    <MenuLinkItem to={page.to}>{page.name}</MenuLinkItem>
                                </MenuStyledItem>
                            ))}
                        </Menu>
                    </Box>
                    
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href={allRoutes.home}
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Noto-regular',
                            fontWeight: 300,
                            letterSpacing: '.3rem',
                            color: commonColors.back_brown,
                            textDecoration: 'none',
                            marginRight: '0!mportant'
                        }}
                    >
                        {LogoText}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', }, justifyContent: 'flex-end', paddingRight: '2rem' }}>
                        {pages.map( ( page, index ) => (
                            <NavButton onClick={handleCloseNavMenu} key={index}>
                                <NavLinkItem to={page.to}>{page.name}</NavLinkItem>
                            </NavButton>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, paddingRight: { xs: '0.75rem',sm: '1.5rem', md: '0', lg: '0'} }}>
                        <Tooltip title="Open language menu" enterDelay={800} leaveDelay={50} placement="bottom-end">
                            <Button variant="outlined" onClick={handleOpenLanguageMenu} sx={languageButtonStyles} >{t( "translation:navbar.language_button" )}</Button>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px'}}
                            id="menu-appbar"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            anchorEl={langButton}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(langButton)}
                            onClose={handleCloseLanguageMenu}
                        >
                            <MenuStyledItem onClick={handleCloseLanguageMenu}>
                                <LangItem>{t( "common:languages.english" )}</LangItem>
                            </MenuStyledItem>
                            <MenuStyledItem onClick={handleCloseLanguageMenu}>
                                <LangItem>{t( "common:languages.greek" )}</LangItem>
                            </MenuStyledItem>
                            <MenuStyledItem onClick={handleCloseLanguageMenu}>
                                <LangItem>{t( "common:languages.albanian" )}</LangItem>
                            </MenuStyledItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};


const NavLinkItem = styled(Link)({
    textDecoration: 'none',
    color: commonColors.back_brown,
    padding: '0',
    display: 'inline-block',
    fontFamily: 'inherit',

    "&:after": {
        display: 'block',
        content: '""',
        borderBottom: `1px solid ${commonColors.title_brown}`,
        borderRadius: '0',
        transform: 'scaleX(0)',
        transition: 'transform 250ms ease-in-out'
    },

    "&:hover": {
        "&:after": {
            transform: 'scaleX(1)',
            transformOrigin: '100% 50 %'
        }
    },
})

const NavButton = styled(Button)({
    margin: '1rem 0',
    color: commonColors.title_brown,
    display: 'block',
    fontFamily: 'Alegreya-regular',

    "&:hover": {
        backgroundColor: 'transparent!important',
    }
})

const MenuStyledItem = styled( MenuItem )({
    color: `${commonColors.title_brown}!important`,
    fontFamily: 'Alegreya-regular!important',

    "&:hover": {
        backgroundColor: `${commonColors.title_brown}!important`,
        color: `${commonColors.white}!important`
    }
})

const MenuLinkItem = styled( Link )( {
    color: 'inherit',
    textDecoration: 'none',

    "&:hover": {
        backgroundColor: 'inherit',
        color: 'inherit'
    }
})

const languageButtonStyles = {
    border: `2px solid ${commonColors.title_brown}`,
    padding: '0 5px',
    color: commonColors.title_brown,
    minWidth: 'min-content',

    "&:hover": {
        backgroundColor: `${commonColors.title_brown}`,
        color: commonColors.white,
        border: `2px solid ${commonColors.title_brown}`,
    }
}

const LangItem = styled( Typography )( {
    color: 'inherit',
    textDecoration: 'none',

    "&:hover": {
        backgroundColor: 'inherit',
        color: 'inherit'
    }
} )



export const NavBar = () => {
    return (
        <ResponsiveAppBar />
    )
}
