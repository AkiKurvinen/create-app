import React, { useState } from 'react';
import styled from '@emotion/styled'
import {ScoreForm, ScoreFormSkeleton} from './ScoreForm'

const UnstyledScoreFormController = (props) => {
    const [loggedIn, setLoggedin] = useState(false)
    
    setTimeout(() => {
        setLoggedin(true)
    }, 2000);
    return <section className={props.className}>{loggedIn ? <ScoreForm label= "Character edit" loggedin={loggedIn}/>:<ScoreFormSkeleton/>}</section>
}

export const ScoreFormController = styled(UnstyledScoreFormController)`
    background-color: black;
`