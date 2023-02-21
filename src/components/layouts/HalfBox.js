import styled from 'styled-components';

export const HalfBox = styled('div')((props) => ({
    padding: '6rem 1rem',
    alignItems: 'center',
    justifyContent: props.justifyContent || 'center',
    margin: '0',
    backgroundColor: props.bgColor, 
    width: '50%',
    whiteSpace: 'pre-line', /* possibly to be removed, exists alredy in app container */
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundImage: props.bgImage || null,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",


    '@media (max-width: 700px)': {
        padding: '5rem 0',
        width: '100%',
    }
})) 