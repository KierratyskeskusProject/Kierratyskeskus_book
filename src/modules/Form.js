import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';
import BarcodeReader from 'react-barcode-reader';
import copy from 'clipboard-copy';
import {ToastContainer, toast} from 'react-toastify';
import {fetchBook} from '../redux/actions';
import description from '../functions/description';
import Webcam from 'react-webcam';

import 'react-toastify/dist/ReactToastify.css';

class Form extends Component {
    state = {description: {}};

    setRef = (webcam) => this.webcam = webcam;

    capture = async () => {
        const screenshot = this.webcam.getScreenshot();
        const image = screenshot.replace(/^data:image\/[a-z]+;base64,/, '');
        this.analyze(image);
    };

    handleScan = async (isbn) => {
        const {fetchBookData} = this.props;
        fetchBookData(isbn);
        this.notify('Scan complete', 1);
    };

    analyze = (image) => {
        const data = {
            requests: [
                {
                    image: {content: `${image}`,},
                    features: [{type: 'TEXT_DETECTION',},],
                },
            ],
        };
        this.query(data);
    };

    query = data => fetch('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCR-0mjTNKnUxcHVYHMs-j6JMWkbl3BT3w', {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    }).then(response => response.json())
        .then((textResponse) => {
            const res = textResponse.responses[0];
            const description = {text: res.textAnnotations ? res.textAnnotations[0].description : 'no text'};
            this.setState({description});
            console.log(this.state.description);
        });

    handleError = err => err;

    copyThis = (e, data) => {
        let d;
        d = data.replace(/<p>/g, '');
        d = d.replace(/<\/p>/g, '\n\n');
        copy(d);
        this.notify('Copied to clipboard', 0);
    };

    notify = (msg, operation) => {
        switch (operation) {
            case 0:
                return (toast.success(msg, {position: toast.POSITION.TOP_RIGHT}));
            case 1:
                return (toast.info(msg, {position: toast.POSITION.TOP_RIGHT}));
            default:
                return (toast.error(msg, {position: toast.POSITION.TOP_RIGHT}));
        }
    };

    render() {
        const {book} = this.props;

        const videoConstraints = {
            width: 300,
            height: 200,
            facingMode: 'user',
        };

        return (
            <div className="col-md-12">
                <ToastContainer autoClose={2000}/>
                <BarcodeReader onScan={this.handleScan} onError={this.handleError}/>
                <div
                    className="col-md-10 whiteBox"
                    onClick={e => this.copyThis(e, book.book.title)}
                    role="button"
                    tabIndex={0}
                >Otsikko:
                    {book.book.title}
                </div>
                <div className="col-md-2 copyIcon">
                    <Glyphicon
                        glyph="save-file"
                        onClick={e => this.copyThis(e, book.book.title)}
                        tabIndex={0}
                    />
                </div>
                <div
                className="col-md-10 whiteBox"
                onClick={e => this.copyThis(e, description(book))}
                role="button"
                tabIndex={0}
            >
                <div dangerouslySetInnerHTML={{__html: description(book)}}/>
            </div>
                <div className="col-md-2 copyIcon">
                    <Glyphicon
                        glyph="save-file"
                        onClick={e => this.copyThis(e, description(book))}
                    />
                </div>
                <div
                    className="col-md-10 whiteBox"
                    onClick={e => this.copyThis(e, this.state.description.tex)}
                    role="button"
                    tabIndex={0}
                >Alaotsikko:
                    <div dangerouslySetInnerHTML={{__html: this.state.description.text}}/>
                </div>
                <div className="col-md-2 copyIcon">
                    <Glyphicon
                        glyph="save-file"
                        onClick={e => this.copyThis(e, this.state.description.text)}
                    />
                </div>
                <div>
                    <Webcam
                        audio={false}
                        height={350}
                        ref={this.setRef}
                        screenshotFormat="image/jpeg"
                        width={350}
                        videoConstraints={videoConstraints}
                    />
                    <div>
                        <button className="btn btn-success" type="button" onClick={this.capture}>Capture photo</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    book: state.book,
});

const mapDispatchToProps = dispatch => ({
    fetchBookData: payload => dispatch(fetchBook(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Form);
