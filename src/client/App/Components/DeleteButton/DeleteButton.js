
import React, { useState } from 'react';
import styles from './DeleteButton.css';

const DeleteButton = ({ onClick }) => {
    const [ activeDelete, updateDeleteState ] = useState( false );
    return (
        <div className={ styles.DeleteButton }>
            { activeDelete ? (
                <span>
                    <span>Are you sure? &nbsp;</span>
                    <span className={ styles.Yes } onClick={ onClick }>Yes</span>
                    <span>&nbsp;/&nbsp;</span>
                    <span className={ styles.No } onClick={ ( ) => updateDeleteState( false ) }>No</span>
                </span>
            ) : (
                <span className={ styles.Delete } onClick={ ( e ) => updateDeleteState( true ) }>Delete</span>
            )}
        </div>
    )
};

export default DeleteButton;