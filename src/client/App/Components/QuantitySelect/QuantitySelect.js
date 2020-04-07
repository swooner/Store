
import React from 'react';

const QuantitySelect = ({ onChange, defaultValue }) => {
    return (
        <select onChange={ onChange } defaultValue={ defaultValue }>
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