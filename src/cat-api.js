// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_k3OMSNQwJi1Dvsi9dzeUebFhUVuiAzo4v5ta3ytK9u4fqZxzpGK3tbU70NIATd5s";


const refs = {
    BASE_URL: 'https://api.thecatapi.com/v1/',
    BREEDS: 'breeds',
    IMG: '/images/search',
    API_KEY: 'live_k3OMSNQwJi1Dvsi9dzeUebFhUVuiAzo4v5ta3ytK9u4fqZxzpGK3tbU70NIATd5s',
};


export function fetchBreeds() {
    return fetch(`${refs.BASE_URL}${refs.BREEDS}?${refs.API_KEY}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.data);
            }
            return response.json();
            
        })
       
};


export function fetchCatByBreed(breedId) {
    return fetch(`${refs.BASE_URL}${refs.IMG}?${breedId}`)
    .then(response => {
            if (!response.ok) {
                throw new Error(response.data);
            }
            return response.json();
    })
    
};



