export const getAPI = (url) => fetch(url).then(response => response.json());
