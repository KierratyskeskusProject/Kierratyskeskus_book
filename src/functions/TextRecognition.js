import React, {Component} from 'react';
import Webcam from 'react-webcam';
import {connect} from "react-redux";
import {fetchText} from "../redux/actions";

class TextRecognition extends Component {
    setRef = (webcam) => this.webcam = webcam;

    capture = async () => {
        const {fetchText} = this.props;
        const screenshot = this.webcam.getScreenshot();
        const image = screenshot.replace(/^data:image\/[a-z]+;base64,/, '');
        fetchText(image);
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
                    height={360}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={360}
                    videoConstraints={videoConstraints}
                />
                <div>
                    <button className="btn btn-success" type="button" onClick={this.capture}>Capture photo</button>
                </div>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    fetchText: payload => dispatch(fetchText(payload))

});

export default connect(
    null,
    mapDispatchToProps
)(TextRecognition);
