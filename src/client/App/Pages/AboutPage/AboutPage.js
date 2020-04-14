
import React, { Component } from 'react';
import styles from './AboutPage.css';

class About extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <div className={styles.plate}>
                      <p className={styles.script} style={{color: 'black'}}>Calhoun Burger Stop</p>
                      <p className={styles.text1}><span>Delicious Food</span></p>
                    </div>
                </div>
                <div className="card-body">
                    <center>Established in February 2020, we aim to provide the best customer experience paired with delicious freshly made food.</center>
                </div>
                <video id="background-video" loop muted autoPlay>
                <source src="public\video.mp4" type="video/mp4" />
                </video>
            </div>
            
        )
    }
};

export default About;