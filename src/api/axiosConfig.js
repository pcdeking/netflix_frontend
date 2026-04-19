import axios from 'axios';

export default axios.create({
    baseURL:'https://98.93.230.39:8080',
    headers: {
        'content-type' : 'Application/json',
    },
          

});