import axios from 'axios';

const GET = (url, onSuccess, onError, onComplete) => {
    axios.get(url).then(onSuccess).catch(onError).finally(onComplete);
}

const POST = (url, data, onSuccess, onError, onComplete) => {
    axios.post(url, data).then(onSuccess).catch(onError).finally(onComplete);
}

const Network = {
    GET,
    POST
};

export default Network;