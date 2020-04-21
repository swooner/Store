
import React, { useState } from 'react';
import ControlGroup from '../../../Components/ControlGroup/ControlGroup';
import Input from '../../../Components/Input/Input';
import SubmitButton from '../../../Components/SubmitButton/SubmitButton';
import AddCategoryMutation from '../mutations/AddCategoryMutation';
import styles from '../PortalPage.css';

const AddCategory = ( props ) => {
    let [ form, updateForm ] = useState( );
    const inputChange = ( e, name ) => {
        updateForm({ ...form, [ name ]: e.target.value })
    };
    const submitForm = () => {
        const { viewer } = props;
        let _form = { ...form };
        _form.employee_id = viewer.user_id;
        // console.log( 'form:', form );
        AddCategoryMutation.commit( _form );
        window.location.replace( '/portal/categories' );
    };
    return (
        <div className={ styles.AddCategory }>
            <ControlGroup title={ 'Name' } description={ null }>
                <Input placeholder={ 'Name' } onChange={ ( e ) => inputChange( e, 'name' ) } />
            </ControlGroup>
            <ControlGroup title={ 'Description' } description={ null }>
                <Input textarea={ true } placeholder={ 'Description' } onChange={ ( e ) => inputChange( e, 'description' ) } />
            </ControlGroup>
            <SubmitButton onClick={ () => submitForm() } />
        </div>
    )
};

export default AddCategory;