import {default as Muibutton} from '@mui/material/Button';
import styled from '@emotion/styled'

function UnstyledButton (props) {
    return (
        <span className={props.className}>
            <i></i>
            <Muibutton {...props}/>
        </span>)
}

export const Button = styled(UnstyledButton)`
    position: relative;
   
    :hover i{
        background-color: var(--mui-palette-primary-dark);
    }
    i{
        width: 20px;
        height: 20px;
        display: block;
        position: absolute;
        top: -5px;
        left: -5px;

        background-color: ${(props) =>
        props.loading ?
        'var(--mui-palette-grey-300)!important' :
        'var(--mui-palette-primary-main)'};
    }
`