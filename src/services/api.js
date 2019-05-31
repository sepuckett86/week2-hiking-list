import key from '../../config.js';

// all hikes within 1 mile of Portland, OR
const URL = `https://www.hikingproject.com/data/get-trails?lat=45.512230&lon=-122.658722&maxDistance=1&maxResults=200&key=${key}`;

const api = {
    getHikes() {
        return fetch(URL)
            .then(response => response.json());
    }
};

export default api;