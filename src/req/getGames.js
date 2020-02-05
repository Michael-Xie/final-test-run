
const getGames = () => {
  const axios = require("axios")
  const dotenv = require('dotenv').config({path: '../../.env'})
  const API_HOST = process.env.API_HOST
  const API_KEY = process.env.API_KEY

  console.log(API_KEY)

  axios("https://api-basketball.p.rapidapi.com/games?date=2019-11-26", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": API_HOST,
      "x-rapidapi-key": API_KEY
    }
  })
  .then(res => {
    res.data.response.forEach(result => {
      if (result.league.name === "NBA")
        console.log(result)
    })
  })
  .catch(err => {
    console.log(err);
  });
}

getGames()

module.exports = getGames;
