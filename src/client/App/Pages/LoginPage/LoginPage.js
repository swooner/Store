
import React, { useState } from 'react';
import ControlGroup from '../../Components/ControlGroup/ControlGroup';
import Input from '../../Components/Input/Input';
import SubmitButton from '../../Components/SubmitButton/SubmitButton';
import LoginMutation from './mutations/LoginMutation';
import styles from './LoginPage.css';

const LoginPage = ( ) => {
    let [ form, updateForm ] = useState( );
    const handleInput = ( e, name ) => {
        updateForm({ ...form, [ name ]: e.target.value })
    };
    const submitForm = ( ) => {
        // console.log( 'form:', form );
        LoginMutation.commit( form );
    };
    return (
        <div className={ styles.LoginPage }>
            <ControlGroup title={ 'User name' } description={ null }>
                <Input 
                    placeholder={ 'User name' } 
                    onChange={ ( e ) => handleInput( e, 'account_name' ) } />
            </ControlGroup>
            <ControlGroup title={ 'Password' } description={ null }>
                <Input 
                    type={ 'password' } 
                    placeholder={ 'Password' } 
                    onChange={ ( e ) => handleInput( e, 'password' ) } />
            </ControlGroup>
            <SubmitButton text={ 'Submit' } onClick={ () => submitForm( ) } />
        </div>
    )
    
};

export default LoginPage;