const axios = require("axios")

axios("https://api-basketball.p.rapidapi.com/leagues", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-basketball.p.rapidapi.com",
		"x-rapidapi-key": "d8dfc5cbfdmshbb0b69d2a790b3dp1ba90ejsn8f36ab430b8b"
	}
})
.then(res => {
  res.data.response.forEach(result => {
    if (result.name === "NBA")
      console.log(result)
  })
})
.catch(err => {
	console.log(err);
});
