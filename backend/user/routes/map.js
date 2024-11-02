
const { fetchPlaces } = require('../controllers/map');
const express = require('express');

const router = express.Router();

router.get("/map", async (req, res) => {
    try {

    const places = await fetchPlaces();
    res.json(places);
    } catch (err) {
        res.status(500).json({ message: "Internal server error." });
    }
});

module.exports = router;