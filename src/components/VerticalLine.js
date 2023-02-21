import styled from "styled-components"

export const VerticalLine = styled('div')(({borderColor, height}) => ({
    height: `${height}`,
    border: `0.5px solid ${borderColor}`,
    width: 0,
    position: 'relative',

}))