import key from '../../config.js';

import QUERY from '../QUERY.js';

// all hikes within maxDistance miles of Portland, OR
const maxDistance = 50;
const URL = `https://www.hikingproject.com/data/get-trails?lat=45.512230&lon=-122.658722&maxDistance=${maxDistance}&maxResults=200&key=${key}`;

const api = {
    getHikes(queryProps) {
        let params = '';
        if(queryProps) {
            params = QUERY.stringify(queryProps);
        }
        return fetch(`${URL}&${params}`)
            .then(response => {
                return response.json();
            });
    }
};

export default api;