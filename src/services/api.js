import key from '../../config.js';

// all hikes within 7 miles of Portland, OR
const maxDistance = 7;
const URL = `https://www.hikingproject.com/data/get-trails?lat=45.512230&lon=-122.658722&maxDistance=${maxDistance}&maxResults=200&key=${key}`;

const api = {
    getHikes() {
        return fetch(URL)
            .then(response => response.json());
    }
};

export default api;