const postPhoto = (req, res) => {
    try {
        const symbol = fetch('https://www.nyckel.com/v1/functions/recycling-identifier/invoke', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + `${req.headers['authorization']}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { "data": "https://www.nyckel.com/assets/example.jpg" }
            )
        })
            .then(response => response.json())
            .then(data => console.log(data));
    } catch (error) {
        console.log(error)
    }
}