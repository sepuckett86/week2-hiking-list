import key from '../../config.js';

// all hikes within maxDistance miles of Portland, OR
const maxDistance = 10;
const URL = `https://www.hikingproject.com/data/get-trails?lat=45.512230&lon=-122.658722&maxDistance=${maxDistance}&maxResults=200&key=${key}`;

const api = {
    getHikes() {
        return fetch(URL)
            .then(response => {
                console.log('api call');
                return response.json();
            });
    }
};

export default api;