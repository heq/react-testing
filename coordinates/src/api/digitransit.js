var axios = require('axios');

const DIGITRANSIT_URL = 'http://api.digitransit.fi/geocoding/v1/search?size=1';

module.exports = {
    getLatLong: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${DIGITRANSIT_URL}&text=${encodedLocation}`

        return axios.get(requestUrl).then(function (response) {
            if (response.data.cod && response.data.message) {
                throw new Error(response.data.message);
            } else {
                return response.data.bbox;
            }
        }, function (response) {
            throw new Error(response.data.message);
        });
    }
};
