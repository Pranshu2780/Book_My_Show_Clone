import axios from 'axios'

const inst = axios.create({
    baseURL:'https://api.themoviedb.org/3'
})

export default inst;