import styled from 'styled-components';
import { commonColors } from '../../assets/design/CommonColors';

export const MainLayout = styled('div')((props) => ({
    maxWidth: "2048",
    padding: '1rem 0 0 0!important',
    margin: '0',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: props.bgColor || commonColors.white
})) 