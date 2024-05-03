import axios from 'axios'
const http = axios.create({
    baseURL: 'https://6633c60ff7d50bbd9b4a9f24.mockapi.io'
})
export class BookInternalService {
    getAllBooks() {
        return http.get('/template')
    }
    increaseLike(id, like){
        return http.patch('/template/' + id, {likes: like+1})
    }
}