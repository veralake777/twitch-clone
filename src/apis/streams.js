import axios from 'axios';

//host URL
export default axios.create({
    baseURL: 'http://localhost:3001'
});