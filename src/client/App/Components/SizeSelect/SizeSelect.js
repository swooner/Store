
import React from 'react';


const SizeSelect = ({ sizes, defaultValue, onChange }) => {
    return (
        <select onChange={ onChange } defaultValue={ defaultValue }>
            { sizes.map(( size, i ) => {
                return (
                    <option key={ i } value={ i }>{ size.name }</option>
                )
            })}
        </select>
    )
};

export default SizeSelect;