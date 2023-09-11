import { fetchBreeds, fetchCatByBreed } from './cat-api';

const refs = {
    breedSelectEl: document.querySelector('.breed-select'),
    loaderEl: document.querySelector('.loader'),
    errorEl: document.querySelector('.error'),
    catInfoEl: document.querySelector('.cat-info'),
};


