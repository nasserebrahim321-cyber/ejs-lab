const express = require('express')
const app = express();
const resturaunts = require('./data')

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('THE APP IS RUNNING')
})

app.get('/', (request, response) => {
    response.render('./homepage.ejs')
})

app.get('/rest', (request, response) => {
    response.render('./all-restaurants.ejs', { resturaunts: resturaunts })
})

app.get('/rest/:id', (request, response) => {
    console.log(request.params.id)
    const restaurant = resturaunts.find((r) => {
        return r.id === Number(request.params.id)
    })
    console.log(restaurant)
    response.render('./resturaunts-details.ejs', { restaurant: restaurant })
})