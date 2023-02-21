import styled from 'styled-components';

export const SplitBox = styled('div')((props) => ({
    display: 'flex',
    margin: '0',
    padding: '0',
    flexDirection: 'row',
    width: '100%',

    '@media( max-width: 700px)': {
        display: 'flex',
        flexDirection: 'column',
        padding: 0
    }
})) 