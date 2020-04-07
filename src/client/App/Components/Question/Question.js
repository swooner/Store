
import React from 'react';
import classnames from 'classnames/bind';
import styles from './Question.css';

const cx = classnames.bind( styles );

const Question = ( props ) => {
    return (
        <div className={ styles.Question }>
            { props.children }
        </div>
    )
};

export const Choice = ({ name, text, activeChoice, onClick }) => {
    const className = cx(
        'Choice', {
            'Choice--state-active': name == activeChoice
        }
    );
    return (
        <div className={ className } onClick={ ( ) => onClick( name ) }>
            <div className={ styles.Circle }></div>
            <div className={ styles.Label }>{ text || name }</div>
        </div>
    )
};

export default Question;