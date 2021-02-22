const Sitemapper = require('sitemapper');
const express = require('express');
const app = express()
const sitemap = new Sitemapper();


app.get('/random', (req, res) => {
   sitemap.fetch('https://iq.opengenus.org/sitemap-posts.xml').then(function (response) {
      let randomIndexUrl = randomIntFromInterval(0, response.sites.length)
      let randomURL = response.sites[randomIndexUrl]
      res.status(301).redirect(randomURL)
   })

})

app.listen(3000, () => {
   console.log("running")
})


function randomIntFromInterval(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}