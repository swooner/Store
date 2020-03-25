
import React, { Component } from 'react';
import ControlGroup from '../../Components/ControlGroup/ControlGroup';
import Input from '../../Components/Input/Input';
import SubmitButton from '../../Components/SubmitButton/SubmitButton';
import styles from './SignUpPage.css';
import SignUpMutatation from './mutations/SignUpMutation';

const FIRST_NAME = 'Cus_Fname';
const LAST_NAME = 'Cus_Lname';
const ACCOUNT_NAME = 'Cus_accName';
const ACCOUNT_PASSWORD = 'Cus_accPass';
const ADDRESS = 'Cus_address';
const CITY = 'Cus_city';
const STATE = 'Cus_state';
const ZIP_CODE = 'Cus_zipCode';
const PHONE_NUMBER = 'Cus_phone';
const EMAIL_ADDRESS = 'Cus_email';

class SignUpPage extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            [ FIRST_NAME ]: '',
            [ LAST_NAME ]: '',
            [ ACCOUNT_NAME ]: '',
            [ ACCOUNT_PASSWORD ]: '',
            [ ADDRESS ]: '',
            [ CITY ]: '',
            [ STATE ]: '',
            [ ZIP_CODE ]: '',
            [ PHONE_NUMBER ]: '',
            [ EMAIL_ADDRESS ]: '',
        };
    }
    handleInput = ( e, name ) => {
        this.setState({
            [ name ]: e.target.value
        });
    }
    submitForm = ( ) => {
        SignUpMutatation.commit( this.state );
    }
    render() {
        return (
            <div className={ styles.SignUpPage }>
                <ControlGroup title={ 'First name' } description={ null }>
                    <Input 
                        placeholder={ 'First Name' } 
                        onChange={ ( e ) => this.handleInput( e, FIRST_NAME ) } />
                </ControlGroup>
                <ControlGroup title={ 'Last name' } description={ null }>
                    <Input 
                        placeholder={ 'Last Name' } 
                        onChange={ ( e ) => this.handleInput( e, LAST_NAME ) } />
                </ControlGroup>
                <ControlGroup title={ 'User name' } description={ null }>
                    <Input 
                        placeholder={ 'User name' } 
                        onChange={ ( e ) => this.handleInput( e, ACCOUNT_NAME ) } />
                </ControlGroup>
                <ControlGroup title={ 'Password' } description={ null }>
                    <Input 
                        type={ 'password' } 
                        placeholder={ 'Password' } 
                        onChange={ ( e ) => this.handleInput( e, ACCOUNT_PASSWORD ) } />
                </ControlGroup>
                <ControlGroup title={ 'Address' } description={ null }>
                    <Input 
                        placeholder={ 'Address' } 
                        onChange={ ( e ) => this.handleInput( e, ADDRESS ) } />
                </ControlGroup>
                <ControlGroup title={ 'City' } description={ null }>
                    <Input 
                        placeholder={ 'City' } 
                        onChange={ ( e ) => this.handleInput( e, CITY ) } />
                </ControlGroup>
                <ControlGroup title={ 'State' } description={ null }>
                    <Input 
                        placeholder={ 'State' } 
                        onChange={ ( e ) => this.handleInput( e, STATE ) } />
                </ControlGroup>
                <ControlGroup title={ 'Zip Code' } description={ null }>
                    <Input 
                        placeholder={ 'Zip Code' } 
                        onChange={ ( e ) => this.handleInput( e, ZIP_CODE ) } />
                </ControlGroup>
                <ControlGroup title={ 'Phone number' } description={ null }>
                    <Input 
                        placeholder={ 'Phone number' } 
                        onChange={ ( e ) => this.handleInput( e, PHONE_NUMBER ) } />
                </ControlGroup>
                <ControlGroup title={ 'Email address' } description={ null }>
                    <Input 
                        type={ 'email' }
                        placeholder={ 'Email address' } 
                        onChange={ ( e ) => this.handleInput( e, EMAIL_ADDRESS ) } />
                </ControlGroup>
                <SubmitButton text={ 'Submit' } onClick={ () => this.submitForm( ) } />
            </div>
        )
    }
};

export default SignUpPage;