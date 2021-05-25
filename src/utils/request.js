import axios from "axios";

export function request(config){
    const instance = axios.create({
        baseURL: 'http://localhost:8081',
        timeout: 10 * 1000
    })

    return instance(config)
}


