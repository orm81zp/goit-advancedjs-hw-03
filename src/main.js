import SearchImageAPI from './js/pixabay-api';
import { addImages, resetImages } from './js/render-functions';

const searchForm = document.querySelector('.form-pixabay');
const searchField = document.querySelector('input[name="search"]');
const loader = document.querySelector('.loader');

const search = q => {
  resetImages();
  loader.classList.add('show');

  SearchImageAPI.search(q)
    .then(data => {
      addImages(data.hits);
    })
    .catch(error => console.log(error))
    .finally(() => {
      loader.classList.remove('show');
    });
};

searchForm.addEventListener('submit', function (event) {
  event.preventDefault();

  search(searchField.value);
  searchField.value = '';
});
