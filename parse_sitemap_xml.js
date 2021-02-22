const Sitemapper = require('sitemapper');
const express=require('express');
const app=express()
const sitemap = new Sitemapper();

let a,b;

app.get('/random',(req,res)=>{
   sitemap.fetch('https://iq.opengenus.org/sitemap-posts.xml').then(function(response) {
   a=randomIntFromInterval(0,response.sites.length)
   b=response.sites[a]
   res.status(301).redirect(b)
})
  
})

app.listen(3000,()=>{
   console.log("running")
})


function randomIntFromInterval(min, max) { 
   return Math.floor(Math.random() * (max - min + 1) + min);
 }