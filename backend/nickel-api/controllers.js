const postPhoto = (req, res) => {
    try {
        console.log(req.file)
        const image = new FormData()
        image.append('data',)
        fetch('https://www.nyckel.com/v1/functions/recycling-identifier/invoke', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + `${req.headers['authorization']}`,
                'Content-Type': 'application/json',
            },
            body: { "data": req.file.buffer }
        })
            .then(response => response.json())
            .then(data => res.status(200).json(data));

    } catch (error) {
        console.log(error)
    }
}

module.exports = { postPhoto }