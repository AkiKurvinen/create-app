import * as React from 'react';
import styled from '@emotion/styled'
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


// {label && <Typography variant="body1">{label}</Typography>}
function unstyledScoreForm({label, edit, loggedin, className}){
    return(
    <form className={className}>
        
        {label && <p>{label}</p>}
        {edit ? <TextField label="Character name" data-my-test-attribute="char-name-input"></TextField> : <Typography variant='overline' data-my-test-attribute="char-name">Character name</Typography>}
        {loggedin && <Button variant="contained" data-my-test-attribute="edit-name" endIcon={<EditIcon />}>Edit</Button>}
        {edit && <Button variant="contained" data-my-test-attribute="save-changes">Save</Button>}

    </form>
    )
}
export const ScoreFormSkeleton = ()=>{
    return <div data-my-test-attribute='skeleton'>
    <Skeleton width={'100%'} height={'2.5em'} count={2}/>
    <Skeleton width={'80%'} height={'2.5em'} count={1}/>
    </div>
}

export const ScoreForm = styled(unstyledScoreForm)`
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  background-color: #BF4F74;
  button{
    display: block;
    display: flex;
  }
`