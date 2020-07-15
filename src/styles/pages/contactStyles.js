import Icons from '../../components/Icons'
import styled, {css} from 'styled-components'

export const EmailWrapper = styled(Icons.Email)`
    color: ${props => props.color ? props.color : 'red'};
    width: ${props => props.width ? props.width : '100px'}; 

    ${props =>
        props.danger && 
        css`
            color: #9963BA;
            width: 35px;
        `
    };
`
export const PhoneWrapper = styled(Icons.Phone)`
    color: ${props => props.color ? props.color : 'red'};
    width: ${props => props.width ? props.width : '100px'}; 

    ${props =>
        props.danger && 
        css`
            color: #9963BA;
            width: 35px;
        `
    };
`
export const LocationOnWrapper = styled(Icons.LocationOn)`
    color: ${props => props.color ? props.color : 'red'};
    width: ${props => props.width ? props.width : '100px'}; 

    ${props =>
        props.danger && 
        css`
            color: #9963BA;
            width: 35px;
        `
    };
`