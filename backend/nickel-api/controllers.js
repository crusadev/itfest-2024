const postPhoto = (req, res) => {
    try {
        console.log(req.headers['authorization'])
        fetch('https://www.nyckel.com/v1/functions/recycling-identifier/invoke', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + `${req.headers['authorization']}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { "data": "https://static.vecteezy.com/system/resources/previews/019/852/457/original/plastic-recycle-symbol-pp-5-icon-vector.jpg" }
            )
        })
            .then(response => response.json())
            .then(data => res.status(200).json(data));

    } catch (error) {
        console.log(error)
    }
}

module.exports = { postPhoto }