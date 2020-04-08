
import React, { useState } from 'react';
import ControlGroup from '../../Components/ControlGroup/ControlGroup';
import Input from '../../Components/Input/Input';
import SubmitButton from '../../Components/SubmitButton/SubmitButton';
import styles from './SignUpPage.css';
import SignUpMutatation from './mutations/SignUpMutation';

const SignUpPage = (props) => {
    let [form, updateForm] = useState();
    const handleInput = (e, name) => {
        updateForm({ ...form, [name]: e.target.value })
    };
    const submitForm = ( e ) => {
        e.preventDefault( );
        // console.log( 'form:', form );
        SignUpMutatation.commit(form);
    };
    return (
        <div>
            <div className="row mt-5 d-flex justify-content-center align-item-center">
                <div className={styles.Card}>
                    <div className={styles.CardBody}>
                        <h3>Signup Form</h3>
                        <form>
                            <div className="row">
                                <div className="col-sm-9 col-md-7 col-lg-5 my-2">
                                    <ControlGroup title={'First name'} description={null}>
                                        <Input
                                            placeholder={'First Name'}
                                            onChange={(e) => handleInput(e, 'first_name')} />
                                    </ControlGroup>
                                </div>
                                <div className="col-sm-9 col-md-7 col-lg-5 my-2">
                                    <ControlGroup title={'Last name'} description={null}>
                                        <Input
                                            placeholder={'Last Name'}
                                            onChange={(e) => handleInput(e, 'last_name')} />
                                    </ControlGroup>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-9 col-md-7 col-lg-5 my-2">
                                        <ControlGroup title={'User name'} description={null}>
                                            <Input
                                                placeholder={'User name'}
                                                onChange={(e) => handleInput(e, 'account_name')} />
                                        </ControlGroup>
                                    </div>
                                    <div className="col-sm-9 col-md-7 col-lg-5 my-2">
                                        <ControlGroup title={'Password'} description={null}>
                                            <Input
                                                type={'password'}
                                                placeholder={'Password'}
                                                onChange={(e) => handleInput(e, 'password')} />
                                        </ControlGroup>
                                    </div>

                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-row">
                                    <div className="col-sm-9 col-md-7 col-lg-5">
                                        <ControlGroup title={'Address'} description={null}>
                                            <Input
                                                placeholder={'Address'}
                                                onChange={(e) => handleInput(e, 'address')} />
                                        </ControlGroup>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-9 col-md-7 col-lg-5 my-2">
                                        <ControlGroup title={'City'} description={null}>
                                            <Input
                                                placeholder={'City'}
                                                onChange={(e) => handleInput(e, 'city')} />
                                        </ControlGroup>
                                    </div>
                                    <div className="col-sm-9 col-md-7 col-lg-5 my-2">
                                        <ControlGroup title={'State'} description={null}>
                                            <Input
                                                placeholder={'State'}
                                                onChange={(e) => handleInput(e, 'state')} />
                                        </ControlGroup>
                                    </div>
                                    <div className="col-sm-9 col-md-7 col-lg-5 my-2">
                                        <ControlGroup title={'Zip Code'} description={null}>
                                            <Input
                                                placeholder={'Zip Code'}
                                                onChange={(e) => handleInput(e, 'zip_code')} />
                                        </ControlGroup>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group d-block">
                                <div className="row">
                                    <div className="col-sm-9 col-md-7 col-lg-5 my-2">
                                        <ControlGroup title={'Email address'} description={null}>
                                            <Input
                                                type={'email'}
                                                placeholder={'Email address'}
                                                onChange={(e) => handleInput(e, 'email_address')} />
                                        </ControlGroup>
                                    </div>

                                    <div className="col-sm-9 col-md-7 col-lg-5 my-2">
                                        <ControlGroup title={'Phone number'} description={null}>
                                            <Input
                                                placeholder={'Phone number'}
                                                onChange={(e) => handleInput(e, 'phone_number')} />
                                        </ControlGroup>
                                    </div>

                                </div>



                            </div>

                            <SubmitButton text={'Submit'} onClick={( e ) => submitForm( e )} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SignUpPage;