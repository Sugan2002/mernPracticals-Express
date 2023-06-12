const express = require ('express')
const app = express()
const Home = require('./Home')
const About = require('./About')
const Branch = require('./Branch')
const Contact = require('./Contact')
const Services = require('./Services')

app.get('/home', (request,response) => {
    response.send("COMMERCIAL WEBSITE")

})

app.use('/Home', Home)
app.use('/About', About)
app.use('/Branch', Branch)
app.use('/Contact', Contact)
app.use('/Services', Services)



app.listen(5500)