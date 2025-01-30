import React, { useState } from 'react';
import {CharacterForm, CharacterFormSkeleton} from './CharacterForm'

export const CharacterFormController = (props) => {
    const [loggedIn, setLoggedin] = useState(false)
    const [edit, setEdit] = useState(false)
    const [charactername, setCharactername] = useState('Testname')
    const [tempname, settempname] = useState(charactername)
    const [loading, setloading] = useState(false)
    
    const handleEdit = () => {
        setEdit(true)
    }
    const handleSave = () => {
        setloading(true)

        setTimeout(() => {
            setLoggedin(true)
            setCharactername(tempname)
            setloading(false)
            setEdit(false)
        }, 1000);
        
    }
    const handleNameChange = (e) =>{
        settempname(e.target.value)
    }

    setTimeout(() => {
        setLoggedin(true)
    }, 1000);

    return(
    <section className={props.className}>{
        loggedIn ?
        <CharacterForm label= "Character edit" loggedin={loggedIn} charactername = {charactername}
            edit={edit} tempcharname = {tempname} loading={loading}
            onClickEdit={handleEdit} onClickSave={handleSave} onChangeCharName={handleNameChange} />:
        <CharacterFormSkeleton/>}
    </section>
    )
}
