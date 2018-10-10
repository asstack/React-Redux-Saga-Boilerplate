const API_URL = 'http://142.93.202.48';
const $ =  window.$;

export async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}

export async function getNews(params) {
  const queryStringParams = $.isEmptyObject(params) ? '' : $.param(params)
  const response = await fetch(`${API_URL}/news?${queryStringParams}`);
  return response.json();
}

export async function getEvents(params) {
  const queryStringParams = $.isEmptyObject(params) ? '' : $.param(params)
  const response = await fetch(`${API_URL}/event?${queryStringParams}`);
  return response.json();
}

export async function getExhibitors(params) {
  const queryStringParams = $.isEmptyObject(params) ? '' : $.param(params)
  const response = await fetch(`${API_URL}/exhibitor?${queryStringParams}`);
  return response.json();
}

export async function getArtists(params) {
  const queryStringParams = $.isEmptyObject(params) ? '' : $.param(params)
  const response = await fetch(`${API_URL}/artist?${queryStringParams}`);
  return response.json();
}

export async function getArtworks(params) {
  const queryStringParams = $.isEmptyObject(params) ? '' : $.param(params)
  const response = await fetch(`${API_URL}/artwork?${queryStringParams}`);
  return response.json();
}

export async function getBlocks(params) {
  const queryStringParams = $.isEmptyObject(params) ? '' : $.param(params)
  const response = await fetch(`${API_URL}/block?${queryStringParams}`);
  return response.json();
}