const axios = require('axios');
const { getUser } = require('../user/controllers/user')

const getAccessToken = async (req, res, next) => {
    try {
        await fetch('https://www.nyckel.com/connect/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=h0zuqupvge9y60ki1l3zckhe8d2gczh6&client_secret=f5zmkafvemuus5lwytrmvevxjkmdr8jhx2i01yyr67lppmm3r6ii8ub1912zo235'
        })
            .then(response => response.json())
            .then(data => req.headers['authorization'] = data.access_token);
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAccessToken }