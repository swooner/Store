
import React, { useState } from 'react';
import ControlGroup from '../../Components/ControlGroup/ControlGroup';
import Input from '../../Components/Input/Input';
import SubmitButton from '../../Components/SubmitButton/SubmitButton';
import styles from './SignUpPage.css';
import SignUpMutatation from './mutations/SignUpMutation';

const SignUpPage = ( props ) => {
    let [ form, updateForm ] = useState( );
    const handleInput = ( e, name ) => {
        updateForm({ ...form, [ name ]: e.target.value })
    };
    const submitForm = ( ) => {
        SignUpMutatation.commit( form );
    };
    return (
        <div className={ styles.SignUpPage }>
            <ControlGroup title={ 'First name' } description={ null }>
                <Input 
                    placeholder={ 'First Name' } 
                    onChange={ ( e ) => this.handleInput( e, 'first_name' ) } />
            </ControlGroup>
            <ControlGroup title={ 'Last name' } description={ null }>
                <Input 
                    placeholder={ 'Last Name' } 
                    onChange={ ( e ) => this.handleInput( e, 'last_name' ) } />
            </ControlGroup>
            <ControlGroup title={ 'User name' } description={ null }>
                <Input 
                    placeholder={ 'User name' } 
                    onChange={ ( e ) => this.handleInput( e, 'account_name' ) } />
            </ControlGroup>
            <ControlGroup title={ 'Password' } description={ null }>
                <Input 
                    type={ 'password' } 
                    placeholder={ 'Password' } 
                    onChange={ ( e ) => this.handleInput( e, 'password' ) } />
            </ControlGroup>
            <ControlGroup title={ 'Address' } description={ null }>
                <Input 
                    placeholder={ 'Address' } 
                    onChange={ ( e ) => this.handleInput( e, 'address' ) } />
            </ControlGroup>
            <ControlGroup title={ 'City' } description={ null }>
                <Input 
                    placeholder={ 'City' } 
                    onChange={ ( e ) => this.handleInput( e, 'city' ) } />
            </ControlGroup>
            <ControlGroup title={ 'State' } description={ null }>
                <Input 
                    placeholder={ 'State' } 
                    onChange={ ( e ) => this.handleInput( e, 'state' ) } />
            </ControlGroup>
            <ControlGroup title={ 'Zip Code' } description={ null }>
                <Input 
                    placeholder={ 'Zip Code' } 
                    onChange={ ( e ) => this.handleInput( e, 'zip_code' ) } />
            </ControlGroup>
            <ControlGroup title={ 'Phone number' } description={ null }>
                <Input 
                    placeholder={ 'Phone number' } 
                    onChange={ ( e ) => this.handleInput( e, 'phone_number' ) } />
            </ControlGroup>
            <ControlGroup title={ 'Email address' } description={ null }>
                <Input 
                    type={ 'email' }
                    placeholder={ 'Email address' } 
                    onChange={ ( e ) => this.handleInput( e, 'email_address' ) } />
            </ControlGroup>
            <SubmitButton text={ 'Submit' } onClick={ () => this.submitForm( ) } />
        </div>
    )
};

export default SignUpPage;