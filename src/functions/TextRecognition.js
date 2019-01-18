import React, { Component } from 'react';
import Webcam from 'react-webcam';

export default class TextRecognition extends Component {

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

    query = data => fetch('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCR-0mjTNKnUxcHVYHMs-j6JMWkbl3BT3w', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => response.json())
        .then((textResponse) => {
            const res = textResponse.responses[0];

            const description = {
                text: res.textAnnotations ? res.textAnnotations[0].description : 'no text',
            };
            console.log(description);
            return description;
        });

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

