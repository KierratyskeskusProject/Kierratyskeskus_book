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


const mapStateToProps = state => ({
    text: state.text,
});
const mapDispatchToProps = (dispatch)=> ({
    fetchText:payload => dispatch(fetchText(payload))

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextRecognition);
