const getAccessToken = (req, res, next) => {
    try {
        const user = fetch(`https://localhots:8080/user/${req.params.id}`)
            .then(response => response.json())
            .then(data => console.log(data));

        const token = fetch('https://www.nyckel.com/connect/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `grant_type=client_credentials&client_id=${user.client_id}
        &client_secret=${user.client_secret}`
        })
            .then(response => response.json())
            .then(data => console.log(data));

        req.headers['authorization'] = token.access_token
        next()

    } catch (error) {
        console.log(error)
    }
}