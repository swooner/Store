
import React, { Component } from 'react';
import styles from './ControlGroup.css';

class ControlGroup extends Component {
    render() {
        const { children, title, description } = this.props;
        return (
            <div className={ styles.ControlGroup }>
                { title &&
                    <div className={ styles.Title }>{ title }</div>
                }
                { description &&
                    <div className={ styles.Description }>{ description }</div>
                }
                { children }
            </div>
        )
    }
};

export default ControlGroup;