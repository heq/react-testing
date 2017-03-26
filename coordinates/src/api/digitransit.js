var axios = require('axios');

const DIGITRANSIT_URL = 'http://api.digitransit.fi/geocoding/v1/search?size=1';

module.exports = {
    getLatLong: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${DIGITRANSIT_URL}&text=${encodedLocation}`

        return axios.get(requestUrl).then(function (response) {
            console.log('API response data', response.data);
            if (response.data.features.length < 1) {
                throw new Error('No result');
            } else {
                return response.data.bbox;
            }
        }, function (response) {
            throw new Error('Error fetching coordinates.');
        });
    }
};
