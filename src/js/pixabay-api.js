class SearchImageAPI {
  static headers = {};

  static baseURL = 'https://pixabay.com/api/';

  static baseParameters = {
    key: '45059083-8ad77475a4982aeafbefc4919',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  static search(q) {
    const parameters = new URLSearchParams({
      ...SearchImageAPI.baseParameters,
      q: q.trim(),
    });

    return fetch(`${SearchImageAPI.baseURL}?${parameters.toString()}`).then(
      response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      }
    );
  }
}

export default SearchImageAPI;
