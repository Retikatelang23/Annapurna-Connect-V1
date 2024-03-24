const router = require("express").Router();
const axios = require('axios');

router.post("/", async (req, res) => {
    try {
        // Make a request to the third-party API
        //Get date from request
        const filterDate = req.body.date;
        console.log('Filter date', filterDate);
        const thirdPartyResponse = await axios({
            method: 'get',
            url: `https://vegetablemarketprice.com/api/dataapi/market/maharashtra/daywisedata?date=${filterDate}`, // Replace this with the actual URL of the third-party API
            // params: req.body, // Pass any required parameters
        });

        // Send the response received from the third-party API back to the frontend
        res.json(thirdPartyResponse.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
