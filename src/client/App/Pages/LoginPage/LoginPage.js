
import React, { useState } from 'react';
import ControlGroup from '../../Components/ControlGroup/ControlGroup';
import Input from '../../Components/Input/Input';
import SubmitButton from '../../Components/SubmitButton/SubmitButton';
import LoginMutation from './mutations/LoginMutation';
import styles from './LoginPage.css';

const LoginPage = () => {
    let [form, updateForm] = useState();
    const handleInput = (e, name) => {
        updateForm({ ...form, [name]: e.target.value })
    };
    const submitForm = () => {
        console.log('form:', form);
        LoginMutation.commit(form);
    };
    return (
        <div>

            <div className={styles.LoginPage}>
                <div className={styles.LoginBody}>
                    <h3>Signin</h3>
                    <form>
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
                        <SubmitButton text={'Submit'} onClick={() => submitForm()} />
                    </form>
                </div>

            </div>
        </div>

    )

};

export default LoginPage;