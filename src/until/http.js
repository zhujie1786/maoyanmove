import axios from 'axios'


class Http{
    constructor(){
        this.instance = axios.create({
            baseURL: 'http://localhost:8080',
            timeout:60000    
        })
    }

    get({u,params={}}){
        return new Promise((resolve,reject) => {
            
            this.instance.get(u,{params})
            
            .then(response => {
                resolve(response)

            }).catch(error => {
                reject(error)
            })
        })
    }
}

export default Http