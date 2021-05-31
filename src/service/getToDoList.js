import axios from 'axios';

const BACKEND_CONFIG = {
    path: 'http://localhost:3001'
}

export function getToDoList() {
    return axios.post(BACKEND_CONFIG.path, {body: 'xxxx'});
}