
import React from 'react';
import Question, { Choice } from '../../../../Components/Question/Question';
import ControlGroup from '../../../../Components/ControlGroup/ControlGroup';
import Input from '../../../../Components/Input/Input';
import styles from '../../CheckoutPage.css';

const DeliveryAddress = ( props ) => {
    const activeDeliveryAddressOption = localStorage.getItem( 'checkout-delivery-address-option' );
    return (
        <div className={ styles.DeliveryAddress }>
            <AddressQuestion
                { ...props }
                activeDeliveryAddressOption={ activeDeliveryAddressOption } />
            { activeDeliveryAddressOption == 'ACCOUNT' ? (
                <div className={styles.accountAddress}>
                <AccountAddress 
                    { ...props } />
                    </div>
            ) : (
                <div className="col-md-3">

                <CustomAddressForm
                    { ...props } />
                    </div>
            )}
        </div>
    )
};

const AddressQuestion = ({ activeDeliveryAddressOption, onDeliveryAddressOptionClick }) => {
    return (
        <Question>
           <button className="btn btn-outline-primary">
            <Choice 
                name={ 'ACCOUNT' } 
                text={ 'Send to account address' } 
                activeChoice={ activeDeliveryAddressOption } 
                onClick={ onDeliveryAddressOptionClick } />
                </button>
                <button className="btn btn-outline-primary">
            <Choice 
                name={ 'CUSTOM' } 
                text={ 'Send to custom address' } 
                activeChoice={ activeDeliveryAddressOption } 
                onClick={ onDeliveryAddressOptionClick } />
                </button>
        </Question>
    )
};


const AccountAddress = ({ viewer }) => {
    const { street, city, state, zip_code } = viewer;
    return (
        <div className={ styles.AccountAddress }>
            <div className={ styles.Street }>{ street }</div>
            <div className={ styles.Location }>
                <span className={ styles.City }>{ city },&nbsp;</span>
                <span className={ styles.State }>{ state }&nbsp;</span>
                <span className={ styles.Zip }>{ zip_code }</span>
            </div>
        </div>
    )
};


const CustomAddressForm = ({ checkoutData, onCustomAddressChange }) => {
    // console.log( 'checkoutData:', checkoutData );
    const { customDeliveryAddress } = checkoutData;
    const { street = '', city = '', state = '', zip_code = '' } = customDeliveryAddress || {};
    return (
        <div className={ styles.CustomAddressForm }>
            <ControlGroup title={ 'Street' }>
                <Input name={ 'street' } placeholder={ 'Street' } onChange={ ( e ) => onCustomAddressChange( e, 'street' ) } value={ street } />
            </ControlGroup>
            <ControlGroup title={ 'City' }>
                <Input name={ 'city' } placeholder={ 'City' } onChange={ ( e ) => onCustomAddressChange( e, 'city' ) } value={ city }  />
            </ControlGroup>
            <ControlGroup title={ 'State' }>
                <Input name={ 'state' } placeholder={ 'State' } onChange={ ( e ) => onCustomAddressChange( e, 'state' ) } value={ state }  />
            </ControlGroup>
            <ControlGroup title={ 'Zip Code' }>
                <Input name={ 'zip_code' } placeholder={ 'Zip code' } onChange={ ( e ) => onCustomAddressChange( e, 'zip_code' ) } value={ zip_code }  />
            </ControlGroup>
        </div>
    )
};

export default DeliveryAddress;