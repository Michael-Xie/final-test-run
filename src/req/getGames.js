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
    // get all the games for the current date.
    const games = []
    res.data.response.forEach(result => {
      if (result.league.name === "NBA")
        games.push(result)
    })
    return setState({games: games})
  })
  .catch(err => {
    console.log(err);
  });
}

module.exports = getGames;
