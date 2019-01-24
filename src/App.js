import React, {Component} from 'react';
import './App.css';
import {Form, Header, Validation} from './modules/index';
import TextRecognition from "./functions/TextRecognition";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="container-fluid">
                    <div className="col-md-8">
                        <Form/>
                        <Validation/>
                    </div>
                    <div className="col-md-4">
                        <TextRecognition/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
