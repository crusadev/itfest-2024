const postPhoto = (req, res) => {
    try {
        console.log(req.headers['authorization'])
        console.log("endpoint called")
        console.log(req.body.image)
        fetch('https://www.nyckel.com/v1/functions/recycling-identifier/invoke', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + `${req.headers['authorization']}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { "data": req.body.image }
            )
        })
            .then(response => response.json())
            .then(data => res.status(200).json(data));

    } catch (error) {
        console.log(error)
    }
}

module.exports = { postPhoto }