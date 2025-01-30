import * as React from 'react';
import styled from '@emotion/styled'
import {Button} from '../../../atoms/Button/Button';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


// {label && <Typography variant="body1">{label}</Typography>}
function unstyledCharacterForm({label, edit, loggedin, className, charactername, onClickEdit, onClickSave, onChangeCharName, tempcharname, loading}){
    return(
    <form className={className}>
        
        {label && <p>{label}</p>}
        {edit ? <TextField label="Character name" data-my-test-attribute="char-name-input"
                  onChange={onChangeCharName} value={tempcharname} variant={charactername?'filled':'outlined'} disabled={!!loading}/>:
                <Typography variant='overline' data-my-test-attribute="char-name">{charactername}</Typography>}
        {loggedin && !edit && <Button variant="contained" data-my-test-attribute="edit-name" endIcon={<EditIcon />} onClick={onClickEdit}>Edit</Button>}
        {edit && <Button variant="contained" data-my-test-attribute="save-changes" onClick={onClickSave} loading={loading}>Save</Button>}

    </form>
    )
}
export const CharacterFormSkeleton = ()=>{
    return <div data-my-test-attribute='skeleton'>
    <Skeleton width={'100%'} height={'2.5em'} count={2}/>
    <Skeleton width={'80%'} height={'2.5em'} count={1}/>
    </div>
}

export const CharacterForm = styled(unstyledCharacterForm)`
  border-radius: 3px;
  background-color: var(--mui-palette-background-paper);
  border: 2px solid var(--mui-palette-primary-main);
  margin: 0 1em;
  padding: 0.25em 1em 1em 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;  align-items: flex-start;
  button{
    display: block;
    display: flex;
  }

`