'use strict';

document.querySelector('#search-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const query = document.querySelector('#query').value;

    const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) throw new Error('Error fetching data');

        const results = await response.json();

        console.log('Search results:', results);
    } catch (error) {
        console.error('Error:', error.message);  // Handle errors
    }
});