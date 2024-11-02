const postPhoto = (req, res) => {
    try {
        const array8 = new Uint8Array(req.file.buffer)
        const blob = new Blob([array8],{ type: 'application/octet-stream' })
        const file = new File([blob], 'test.jpg')
        console.log(file)
        const image = new FormData()
        image.append('data',file)
        fetch('https://www.nyckel.com/v1/functions/recycling-identifier/invoke', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + `${req.headers['authorization']}`,
            },
            body: image
        })
            .then(response => response.json())
            .then(data => res.status(200).json(data));

    } catch (error) {
        console.log(error)
    }
}

module.exports = { postPhoto }