import {fetchTextBegin, fetchTextSuccess, fetchBookFailure} from '../types'

export const fetchText = (image) => {

    const action = (dispatch) => {
        dispatch(fetchTextBegin());
        const query = data => fetch('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCR-0mjTNKnUxcHVYHMs-j6JMWkbl3BT3w', {
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
                    dispatch(fetchTextSuccess(description));
                }, error => fetchBookFailure(error)
            );
    };
    return action;

};


