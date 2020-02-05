const getGames = (API_KEY, API_HOST, setState) => {
  const axios = require("axios")

  const date = "2020-02-13"

  axios(`https://api-basketball.p.rapidapi.com/games?date=${date}`, {
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
    return setState({games: games, date: date})
  })
  .catch(err => {
    console.log(err);
  });
}

module.exports = getGames;
