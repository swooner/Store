
import React from 'react';
import styles from '../../Pages/StorePage/StorePage.css'

const QuantitySelect = ({ onChange, defaultValue }) => {
    return (
        <select className={styles.sizeSelect} onChange={ onChange } defaultValue={ defaultValue }>
            { Array.from( Array( 10 ) ).map(( number, i ) => {
                const index = i + 1;
                return (
                    <option key={ i } value={ index }>{ index }</option>
                )
            })}
        </select>
    )
};

export default QuantitySelect;