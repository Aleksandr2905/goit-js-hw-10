import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchBreeds, fetchCatByBreed } from './cat-api';


const refs = {
    breedSelectEl: document.querySelector('.breed-select'),
    loadingEl: document.querySelector('.loading'),
    loaderEl: document.querySelector('.loader'),
    errorEl: document.querySelector('.error'),
    catInfoEl: document.querySelector('.cat-info'),
};

refs.breedSelectEl.addEventListener('change', OnBreedSelectElChange);

fetchBreeds()
    .then(response => {
        refs.breedSelectEl.classList.remove('visually-hidden');
        refs.loadingEl.classList.add('visually-hidden');
        refs.loaderEl.classList.add('visually-hidden');
        refs.breedSelectEl.innerHTML = createMarkup(response.data);
        new SlimSelect({
            select: refs.breedSelectEl,
            settings: {
            showSearch: false,
            },
        });
    })
    .catch(err => {
        refs.loadingEl.classList.add('visually-hidden');
        refs.loaderEl.classList.add('visually-hidden');
      Notify.failure(`${refs.errorEl.textContent}`);
    })

    function createMarkup(arr) {
        return arr.map(({ id, name }) =>
            `<option value="${id}">${name}</option>`
        ).join('');    

     
};


function OnBreedSelectElChange(event) {
    refs.loadingEl.classList.remove('visually-hidden');
    refs.loaderEl.classList.remove('visually-hidden');
    refs.errorEl.classList.add('visually-hidden');
    refs.catInfoEl.classList.add('visually-hidden');
    const breedElId = event.target.value;
    

    fetchCatByBreed(breedElId)
        .then(response => {
            refs.loadingEl.classList.add('visually-hidden');
            refs.loaderEl.classList.add('visually-hidden');
            refs.catInfoEl.classList.remove('visually-hidden');
            refs.catInfoEl.innerHTML = createCatInfoMarkup(response.data[0])
        })
        .catch(err => {
            refs.loadingEl.classList.add('visually-hidden');
            refs.loaderEl.classList.add('visually-hidden');
            Notify.failure(`${refs.errorEl.textContent}`);
        });
    
    function createCatInfoMarkup(
        { breeds: {
         0: { temperament, name, description },
        }, url }) {
        return `
        <img src="${url}" alt="${name}" width="600" />
        <div class="wrapper">
        <h2>${name}</h2>
        <p>${description}</p>
        <h3>Temperament:</h3>
        <p>${temperament}</p>
        </div>`        
    };


};




