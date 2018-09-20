import axios from 'axios'
//Deze API returned een axios object dat gebruikt maakt van een
//specifieke url
export default () => {
    return axios.create({
        baseURL: `http://localhost:8081/`
    })
}