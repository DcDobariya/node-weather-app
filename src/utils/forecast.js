const axios = require("axios").default;

module.exports = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/forecast?access_key=daa35b865d15799fba36b5f0e5d1acef&query=${latitude},${longitude}`;

    axios
        .get(url)
        .then(({ data }) => {
            if (data.error) return callback("Unable to find location. Try another search.", undefined);

            const { temperature, precip } = data.current || {};
            callback(undefined, `It is currently ${temperature} degrees out. There is a ${precip}% chance of rain.`);
        })
        .catch((err) => callback(err.message, undefined));
};
