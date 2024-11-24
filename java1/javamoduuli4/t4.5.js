'use strict'
async function fetchChuckNorrisJoke() {
  const apiUrl = `https://api.chucknorris.io/jokes/random`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Error fetching data');

    const results = await response.json();
    console.log(results.value);
  }catch (error) {
    console.error('Error:', error.message)
  }
}
fetchChuckNorrisJoke()