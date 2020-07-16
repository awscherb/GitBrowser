import axios from 'axios';


export default function api() {
    const baseUrl = "https://api.github.com"

    return {
        search: (query: string) => {
            return axios.get(`${baseUrl}/search/repositories`, {
                params: {
                  q: query
                }
              })
        },

        getUser: (username: string) => {
            return axios.get(`${baseUrl}/users/username`)
        }
    }
}