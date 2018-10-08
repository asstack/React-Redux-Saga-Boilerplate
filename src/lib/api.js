const API_URL = 'http://142.93.202.48';

export async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}

export async function getNews() {
  const response = await fetch(`${API_URL}/news`);
  return response.json();
}

export async function getEvents(params) {
  console.log('events api', params);
  const response = await fetch(`${API_URL}/event`);
  return response.json();
}

export async function getExhibitors() {
  const response = await fetch(`${API_URL}/exhibitor`);
  return response.json();
}

export async function getArtists() {
  const response = await fetch(`${API_URL}/artist`);
  return response.json();
}

export async function getArtworks() {
  const response = await fetch(`${API_URL}/artwork`);
  return response.json();
}

export async function getBlocks() {
  const response = await fetch(`${API_URL}/block`);
  return response.json();
}