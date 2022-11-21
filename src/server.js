const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());

// https://rapidapi.com/fluis.lacasse/api/americanfootballapi
// Current season id 46786

const END_POINT = 'tournament/9464/season/46786/best-players/regularSeason';

const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY = process.env.API_KEY;

app.get('/aside', async (req, res) => {
  const options = {
    method: 'GET',
    url: `${API_BASE_URL}${END_POINT}`,
    headers: {
      'X-RapidAPI-Key': `${API_KEY}`,
      'X-RapidAPI-Host': 'americanfootballapi.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
