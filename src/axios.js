import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a397e.firebaseio.com/'
});

export default instance;
