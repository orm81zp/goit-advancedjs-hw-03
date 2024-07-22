'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';

const simpleLightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  className: 'simple-lightbox',
});

const addFooter = ({ views, comments, downloads, likes }) => {
  return `
  <div class="gallery-footer">
    <div class="field"><div class="label">Likes</div><div class="value">${likes}</div></div>
    <div class="field"><div class="label">Views</div><div class="value">${views}</div></div>
    <div class="field"><div class="label">Comments</div><div class="value">${comments}</div></div>
    <div class="field"><div class="label">Downloads</div><div class="value">${downloads}</div></div>
  </div>
  `;
};

export const resetImages = (selector = '.gallery') => {
  const gallery = document.querySelector(selector);
  gallery.textContent = '';
};

export const addImages = (images, selector = '.gallery') => {
  const gallery = document.querySelector(selector);

  if (images.length === 0) {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: '#EF4040',
      messageColor: '#FFFFFF',
      messageSize: '16px',
      position: 'topRight',
      maxWidth: 380,
    });
    return;
  }

  const adjacentImages = images
    .map(
      ({ webformatURL, largeImageURL, tags, ...props }) =>
        `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
          />
        </a>
        ${addFooter(props)}
      </li>
      `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', adjacentImages);
  simpleLightbox.refresh();
};
