import React, {Component} from 'react';
import Webcam from 'react-webcam';
import {connect} from "react-redux";

class TextRecognition extends Component {
    setRef = (webcam) => this.webcam = webcam;

    capture = async () => {
        const screenshot = this.webcam.getScreenshot();
        const image = screenshot.replace(/^data:image\/[a-z]+;base64,/, '');
        this.analyze(image);
    };

    analyze = (image) => {
        const data = {
            requests: [
                {
                    image: {
                        content: `${image}`,
                    },
                    features: [
                        {
                            type: 'TEXT_DETECTION',
                        },
                    ],
                },
            ],
        };
        this.query(data);
    };

    render() {
        const videoConstraints = {
            width: 300,
            height: 200,
            facingMode: 'user',
        };

        return (
            <div>
                <Webcam
                    audio={false}
                    height={350}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={350}
                    videoConstraints={videoConstraints}
                />
                <button type="button" onClick={this.capture}>Capture photo</button>
            </div>
        );
    }

}



export default connect(null)(TextRecognition);
