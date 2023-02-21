import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styled from "styled-components";



export const CountryCodeMenu = ( { open, handleClose, anchorEl } ) => {
    
    return (
        <Menu
            id="demo-customized-menu"
            MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
            }}
            sx={{ mt: '40px' }}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            anchorEl={anchorEl}
            onClose={() => handleClose("")}
        >
            {
                flags.map( flag => (
                    <MenuItem onClick={() => handleClose(flag.code )} sx={{ justifyContent: 'space-between' }} key={flag.code} >
                        {flag.code}
                        <Flag svg={flag.svg} />
                    </MenuItem>
                ) )
            }
        </Menu>
    )
};


const Flag = ( { svg } ) => {
    const svgFlag = `"${svg}"`

    return (
        <StyledFlag
            data-testid={svg}
            style={{
                backgroundImage: `url(${svgFlag})`
            }}
        />
    )
}


const StyledFlag = styled( 'span' )( () => {
        return {
            display: 'inline-block',
            backgroundSize: 'cover',
            height: '1em',
            width: 'calc(1em*3/2)',
            marginLeft: '1rem',
        }
    } )


const flags = [
    {
        "svg": "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 90 60'%3e%3cpath fill='%23ED2024' d='M0 0h90v60H0z'/%3e%3cpath fill='%23212121' d='M32.5 12.2v16l7.1 2.5-5 4.9 2.4 3 5.3-5.5 1.2 2.3-3 4.9 3.6 5.6-1.8 2.6 2.8 3.6 2.7-3.7-1.5-2.6 3-5.8-2.7-4.6 1.2-2.3 5.2 5.5 2.5-2.9-5.2-5.1 7.2-2.6V12.2l-5.2 1.9-.1 3.8-3.3.3v-2.6l1.7-2.3 5.6-2.2-2.3-.4 1.4-1.2.9.4-.8-1.4L54 9l-1-1.1L47.5 9l1.4 1.1-3.8 4.9-3.8-4.8 1.3-1.1-5-1.2L36.2 9l-1.5-.4-.8 1.4.9-.6 1.6 1.1-2.3.5 5.5 2 1.6 2.3v2.9l-3.3-.3v-3.6z'/%3e%3cpath d='M26.2 25h6.4v2.5h-6.4zm0-4.1h6.4v2.7h-6.4zm0-4.2h6.4v2.6h-6.4zm0-4h6.4v2.5h-6.4zM57.4 25h6.4v2.5h-6.4zm0-4.1h6.4v2.7h-6.4zm0-4.2h6.4v2.6h-6.4zm0-4h6.4v2.5h-6.4zM53.4 36.1h6.4V38h-6.4zm-23.2 0h6.4V38h-6.4z' fill='%23212121'/%3e%3c/svg%3e",
        "code": "+355"
    },
    {
        "svg": "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 513 342'%3e%3cpath fill='white' d='M0 0h513v342H0z'/%3e%3cg fill='%230d5eaf'%3e%3cpath d='M0 0h513v38H0zm0 76h513v38H0zm0 76h513v38H0zm0 76h513v38H0zm0 76h513v38H0z'/%3e%3cpath d='M0 0h190v190H0z'/%3e%3c/g%3e%3cg fill='white'%3e%3cpath d='M0 76h190v38H0z'/%3e%3cpath d='M76 0h38v190H76z'/%3e%3c/g%3e%3c/svg%3e",
        "code": "+30"
    },
    {
        "svg": "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='%23D80027' d='M0 85.334h512v341.337H0z'/%3e%3cpath fill='white' d='M512 295.883H202.195v130.783h-79.76V295.883H0v-79.772h122.435V85.329h79.76v130.782H512v61.218z'/%3e%3cpath fill='%232E52B2' d='M512 234.666v42.663H183.652v149.337h-42.674V277.329H0v-42.663h140.978V85.329h42.674v149.337z'/%3e%3c/svg%3e",
        "code": "+47"
    },
    {
        "svg": "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 85.333 512 341.333'%3e%3cpath fill='white' d='M0 85.333h512V426.67H0z'/%3e%3cpath fill='%23D80027' d='M288 85.33h-64v138.666H0v64h224v138.666h64V287.996h224v-64H288z'/%3e%3cpath d='M393.785 315.358L512 381.034v-65.676zm-82.133 0L512 426.662v-31.474l-143.693-79.83zm146.982 111.304l-146.982-81.664v81.664z' fill='%230052B4'/%3e%3cpath fill='white' d='M311.652 315.358L512 426.662v-31.474l-143.693-79.83z'/%3e%3cpath fill='%23D80027' d='M311.652 315.358L512 426.662v-31.474l-143.693-79.83z'/%3e%3cpath d='M90.341 315.356L0 365.546v-50.19zm110.007 14.154v97.151H25.491z' fill='%230052B4'/%3e%3cpath fill='%23D80027' d='M143.693 315.358L0 395.188v31.474l200.348-111.304z'/%3e%3cpath d='M118.215 196.634L0 130.958v65.676zm82.133 0L0 85.33v31.474l143.693 79.83zM53.366 85.33l146.982 81.664V85.33z' fill='%230052B4'/%3e%3cpath fill='white' d='M200.348 196.634L0 85.33v31.474l143.693 79.83z'/%3e%3cpath fill='%23D80027' d='M200.348 196.634L0 85.33v31.474l143.693 79.83z'/%3e%3cpath d='M421.659 196.636L512 146.446v50.19zm-110.007-14.154V85.331h174.857z' fill='%230052B4'/%3e%3cpath fill='%23D80027' d='M368.307 196.634L512 116.804V85.33L311.652 196.634z'/%3e%3c/svg%3e",
        "code": "+44"
    }
]