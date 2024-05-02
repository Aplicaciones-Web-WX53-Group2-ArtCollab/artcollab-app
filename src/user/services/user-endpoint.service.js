import axios from 'axios'

export class UserEndpointService {
  baseUrl = 'http://localhost:3000'
  readerUrl = '/reader'
  loginUrl = '/login'

  getUsers(){
    return axios.get(`${this.baseUrl}${this.readerUrl}`)
  }

  getUserById(id){
    return axios.get(`${this.baseUrl}${this.readerUrl}/${id}`)
  }

  createUser(reader){
    return axios.post(`${this.baseUrl}${this.readerUrl}`, reader)
  }

  loginUser(reader){
    return axios.post(`${this.baseUrl}${this.loginUrl}`, reader)
  }

  getLoggedInUser(){
    return axios.get(`${this.baseUrl}${this.loginUrl}`)
  }
}