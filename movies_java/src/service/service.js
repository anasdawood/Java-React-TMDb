import axios from 'axios';

let server = "http://localhost:28080/RestTest/rest/movies/fav/"

export function getTrending() {
    console.log("getTrending");
    return axios.get(`${server}`, { mode: 'CORS' })
        .then(resp => resp.data)
        .catch(error => error.response);
}