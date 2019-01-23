import {fetchTextBegin, fetchTextSuccess, fetchBookFailure} from '../types'

export const fetchText = (image) => {

    const action = (dispatch) => {
        const data = {
            requests: [ { image: { content: `${image}`},
            features: [ { type: 'TEXT_DETECTION' }],
             },
            ],
        };
        dispatch(fetchTextBegin());
        const url = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCR-0mjTNKnUxcHVYHMs-j6JMWkbl3BT3w';
        const request = fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
     
        return request
            .then(response => response.json())
            .then((textResponse) => {
                    const res = textResponse.responses[0];
                    const description = { text: res.textAnnotations[0].description };
                    dispatch(fetchTextSuccess(description.text));
                }, error => fetchBookFailure(error)
            );
    };
    return action;
};


