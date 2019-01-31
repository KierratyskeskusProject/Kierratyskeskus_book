import {fetchTextBegin, fetchTextSuccess, fetchTextFailure} from '../types';

const GOOGLE_API_KEY = 'Your App key here';


export const fetchText = (image) => {
    const action = async (dispatch) => {
        const data = {
            requests: [{
                image: {content: `${image}`},
                features: [{type: 'TEXT_DETECTION'}],
            },
            ],
        };
        dispatch(fetchTextBegin());

        const url = `https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_API_KEY}`;
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
                if (textResponse.error) {
                    dispatch(fetchTextSuccess('no data'))
                } else if (textResponse.responses[0].fullTextAnnotation) {
                    const description = textResponse.responses[0].fullTextAnnotation.text;
                    dispatch(fetchTextSuccess({text: description}));
                } else {
                    dispatch(fetchTextSuccess('no text'));
                }
            }, error => fetchTextFailure(error));
    };
    return action;
};
