import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_HOST_MOVIE
})

export default instance