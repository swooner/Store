
import React, {Fragment} from 'react';
import styles from '../../Pages/StorePage/StorePage.css'


const SizeSelect = ({ sizes, activeSize, defaultValue, onChange }) => {
    // console.log( 'defaultValue:', defaultValue );
    return (
        <Fragment>
        <select className={styles.sizeSelector} onChange={ onChange } defaultValue={ defaultValue }>
            { sizes.map(( size, i ) => {
                return (
                    <option key={ i } value={ i }>{ size.name }</option>
                )
            })}
        </select>
        </Fragment>
    )
};

export default SizeSelect;