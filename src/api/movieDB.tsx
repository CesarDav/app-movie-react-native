import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'c78b4be47d925bf495f879179c1e3cf4',
        language: 'es-ES'
    }
});

export default movieDB;