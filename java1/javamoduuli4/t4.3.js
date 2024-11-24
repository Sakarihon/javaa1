'use strict';

document.querySelector('#search-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const query = document.querySelector('#query').value;
    const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Error fetching data');

        const results = await response.json();

        document.querySelector('#results').innerHTML = '';

        results.forEach(tvShow => {
            const article = document.createElement('article');

            const name = document.createElement('h2');
            name.textContent = tvShow.show.name;
            article.appendChild(name);

            const url = document.createElement('a');
            url.href = tvShow.show.url;
            url.target = '_blank';
            url.textContent = 'Details';
            article.appendChild(url);

            const image = document.createElement('img');
            image.src = tvShow.show.image?.medium
            image.alt = tvShow.show.name;
            article.appendChild(image);


            const summary = document.createElement('div');
            summary.innerHTML = tvShow.show.summary?.replace(/<[^>]*>/g, '')
            article.appendChild(summary);

            document.querySelector('#results').appendChild(article);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
});