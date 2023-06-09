import axios from 'axios';

const handleError = (err, onError) => {
    if (err.response.data.code === 11000) {
        onError({ message: "Duplicate mail id. User already registered with this mail." });
        return;
    }
    onError(err.response.data);
}

const GET = (url, onSuccess, onError, onComplete) => {
    axios.get(url).then(onSuccess).catch((err) => handleError(err, onError)).finally(onComplete);
}

const POST = (url, data, onSuccess, onError, onComplete) => {
    axios.post(url, data).then(onSuccess).catch((err) => handleError(err, onError)).finally(onComplete);
}

const Network = {
    GET,
    POST
};

export default Network;