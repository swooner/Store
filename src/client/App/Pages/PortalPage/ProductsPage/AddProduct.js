
import React, { useState, useEffect } from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import ControlGroup from '../../../Components/ControlGroup/ControlGroup';
import SubmitButton from '../../../Components/SubmitButton/SubmitButton';
import Input from '../../../Components/Input/Input';
import AddProductMutation from '../mutations/AddProductMutation';
import styles from '../PortalPage.css';

const AddProduct = ( props ) => {
    const [ form, updateForm ] = useState( {} );
    const [ sizes, updateSizes ] = useState( [] );
    const inputChange = ( e, name ) => {
        let value = e.target.value;
        if ( name == 'price' ) {
            value = parseFloat( value );
        }
        else if ( name == 'category_id' || name == 'quantity' || name == 'threshold' ) {
            value = parseInt( value );
        }
        updateForm({ ...form, [ name ]: value });
    };
    const addSize = ( ) => {
        updateSizes( [ ...sizes, { name: '', surcharge: 0.00 } ] );
    };
    const changeSize = ( e, index, attribute ) => {
        let allSizes = [ ...sizes ];
        let thisSize = allSizes[ index ];
        const { value } = e.target;
        thisSize[ attribute ] = attribute == 'surcharge' ? parseFloat( value ) : value;
        allSizes[ index ] = thisSize;
        updateSizes( allSizes );
    };
    const submitForm = () => {
        const { viewer } = props;
        let _form = { ...form };
        _form.employee_id = viewer.user_id;
        _form.sizes = sizes;
        console.log( '_form:', _form );
        AddProductMutation.commit( _form );
    };
    const { category_list } = props;
    return (
        <div className={ styles.AddProduct }>
            <ControlGroup title={ 'Category' } description={ null }>
                <select onChange={ ( e ) => inputChange( e, 'category_id' ) }>
                    <option value={ null }>Select a category</option>
                    { category_list ? category_list.category_list.map(( category, i ) => {
                        const { category_id, name } = category;
                        return (
                            <option key={ i } value={ category_id }>{ name }</option>
                        )
                    }): [] }
                </select>
            </ControlGroup>
            <ControlGroup title={ 'Name' } description={ null }>
                <Input placeholder={ 'Name' } onChange={ ( e ) => inputChange( e, 'name' ) } />
            </ControlGroup>
            <ControlGroup title={ 'Description' } description={ null }>
                <Input placeholder={ 'Description' } textarea={ true } onChange={ ( e ) => inputChange( e, 'description' ) } />
            </ControlGroup>
            <ControlGroup title={ 'Price' } description={ null }>
                <Input type={ 'number' } placeholder={ 'Price' } onChange={ ( e ) => inputChange( e, 'price' ) } min={ 0.00 } max={ 99.99 } step={ 0.01 } />
            </ControlGroup>
            <ControlGroup title={ 'Sizes' } description={ null }>
                { sizes.map(( size, i ) => {
                    const { name, surcharge } = size;
                    return (
                        <div key={ i } className={ styles.Size }>
                            <Input placeholder={ 'Size name' } onChange={ ( e ) => changeSize( e, i, 'name' ) } value={ name } />
                            <Input type={ 'number' } placeholder={ 'Surcharge' } onChange={ ( e ) => changeSize( e, i, 'surcharge' ) } value={ surcharge }  min={ 0 } max={ 99.99 } step={ 0.01 } />
                        </div>
                    )
                })}
                <button onClick={ () => addSize( ) }>Add Size</button>
            </ControlGroup>
            <ControlGroup title={ 'Quantity' } description={ null }>
                <Input type={ 'number' } placeholder={ 'Quantity' } onChange={ ( e ) => inputChange( e, 'quantity' ) }  min={ 0 } />
            </ControlGroup>
            <ControlGroup title={ 'Threshold' } description={ null }>
                <Input type={ 'number' } placeholder={ 'Threshold' } onChange={ ( e ) => inputChange( e, 'threshold' ) } min={ 0 } />
            </ControlGroup>
            <SubmitButton onClick={ ( ) => submitForm( ) } />
        </div>
    )
};

export default createFragmentContainer( AddProduct, {
    category_list: graphql`
        fragment AddProduct_category_list on Query @argumentDefinitions (
            first: { type: "Int" }
        ) {
            category_list ( first: 10 ) {
                category_id
                name
            }
        }
    `
});