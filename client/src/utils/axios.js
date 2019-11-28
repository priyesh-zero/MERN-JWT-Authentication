import axios from 'axios'

let token = localStorage.getItem('token')

export const setToken = (tokenS) => {
    token = tokenS
}

export const Axios = axios.create({
    baseURL: '',
    timeout: 1000,
    headers: {'Authentication': `JWT ${token}`}
})