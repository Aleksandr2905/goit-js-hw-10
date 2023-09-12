import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_k3OMSNQwJi1Dvsi9dzeUebFhUVuiAzo4v5ta3ytK9u4fqZxzpGK3tbU70NIATd5s";


export function fetchBreeds() {
    return axios.get(`https://api.thecatapi.com/v1/breeds`)
        
    };


export function fetchCatByBreed(breedId) {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    
    };



