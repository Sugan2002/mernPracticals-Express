const express = require ('express')
const app = express()
const Home = require('./Home')
const About = require('./About')
const Services = require('./Services')
const Contact = require('./Contact')
const Branch = require('./Branch')

app.get('/', (request,response) => {
    response.send("We are having 6 routes")

})

app.use('/Home', Home)
app.use('/About', About)
app.use('/Services', Services)
app.use('/Contact', Contact)
app.use('/Branch', Branch)



app.listen(5500)