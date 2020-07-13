import Icons from '../../components/Icons'
import styled, {css} from 'styled-components'

export const EmailWrapper = styled(Icons.Email)`
    color: ${props => props.color ? props.color : 'red'};
    width: ${props => props.width ? props.width : '100px'}; 

    ${props =>
        props.danger && 
        css`
           color:orange`
    };
`
