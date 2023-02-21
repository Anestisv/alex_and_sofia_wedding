import styled from "styled-components";


export const VerticalBar = ({text, rotate, float}) => {

    return (
        <VerticalBarWrapper float={float} >
            <BoxText rotate={rotate} >{text}</BoxText>
        </VerticalBarWrapper>
    )
}

const VerticalBarWrapper = styled.aside(props => ({
    margin: 0,
    padding: 0,
    height: '100vh',
    width: '4rem',
    color: '#A19084',
    backgroundColor: '#FFFFFF',
    left: props.float === 'left' ? '0' : 'null',
    right: props.float === 'right' ? '0' : 'null',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    "@media (max-width: 800px)": {
        display: 'none',
    },

}))

const BoxText = styled.p(props => ({
    webkitTransform: props.rotate === 'left' ? 'rotate(-90deg)' : 'rotate(90deg)',
    mozTransform: props.rotate === 'left' ? 'rotate(-90deg)' : 'rotate(90deg)',
    msTransform: props.rotate === 'left' ? 'rotate(-90deg)' : 'rotate(90deg)',
    oTransform: props.rotate === 'left' ? 'rotate(-90deg)' : 'rotate(90deg)',
    transform: props.rotate === 'left' ? 'rotate(-90deg)' : 'rotate(90deg)',
    direction: 'lrt',
    whiteSpace: 'nowrap',
    margin: 0,
    letterSpacing: '0.25rem',
    position: 'fixed'
}))