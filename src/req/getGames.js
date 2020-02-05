const getGames = (API_KEY, API_HOST, setState) => {
  const axios = require("axios")

  axios("https://api-basketball.p.rapidapi.com/games?date=2019-11-26", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": API_HOST,
      "x-rapidapi-key": API_KEY
    }
  })
  .then(res => {
    const r = []
    res.data.response.forEach(result => {
      if (result.league.name === "NBA")
        r.push(result)
    })
    return setState(r)
  })
  .catch(err => {
    console.log(err);
  });
}

module.exports = getGames;
