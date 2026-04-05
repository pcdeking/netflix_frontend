import axios from 'axios';

export default axios.create({
    baseURL:'http://98.93.149.63:8080 ',
    headers: {
        'Content-Type': 'application/json',
    },
});