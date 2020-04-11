import React from 'react';
import './MachineLearning.css';


// Change this value for the speed of the animations.

// Change this value for the number of bars (value) in the array.

// This is the main color of the array bars.


export default class MachineLearning extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <div className="grid-container">
                    <div className="header">
                        <h1>Machine Learning Examples</h1>
                        <p>Coming Soon ...</p>
                    </div>
                </div>
                <div className="footer">
                    <p><b>Visualizing Machine Learning Algorithms, Developed with React Framework. Written by Ashkan Bashiri.</b></p>
                </div>
            </React.Fragment>
        )
    }
}