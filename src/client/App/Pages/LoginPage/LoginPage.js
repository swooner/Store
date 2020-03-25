
import React, { Component } from 'react';
import ControlGroup from '../../Components/ControlGroup/ControlGroup';
import Input from '../../Components/Input/Input';
import SubmitButton from '../../Components/SubmitButton/SubmitButton';
import LoginMutation from './mutations/LoginMutation';
import styles from './LoginPage.css';

const ACCOUNT_NAME = 'Cus_accName';
const ACCOUNT_PASSWORD = 'Cus_accPass';

class LoginPage extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            [ ACCOUNT_NAME ]: '',
            [ ACCOUNT_PASSWORD ]: ''
        };
    }
    handleInput = ( e, name ) => {
        this.setState({
            [ name ]: e.target.value
        });
    }
    submitForm = ( ) => {
        // console.log( 'this.state:', this.state );
        LoginMutation.commit( this.state );
    }
    render() {
        return (
            <div className={ styles.LoginPage }>
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
                <SubmitButton text={ 'Submit' } onClick={ () => this.submitForm( ) } />
            </div>
        )
    }
};

export default LoginPage;