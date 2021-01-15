const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World from Vishal app')
})

app.get('/about', (req, res) => {
    res.send('My name is Vishal Reddy Vennavaram. I am a graduate student at Northwest Missouri State University.')
  })
  
  app.get('/contact', (req, res) => {
    res.send('You can reach me out at S538349@NWMISSOURI.EDU')
  })
  
  app.get('/help', (req, res) => {
    res.send('Iam available to help anytime')
  })

  app.get('/help/:topic', (req, res) => {
    res.send(`You have requested the help ${req.params.topic} page!`)
  })
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})