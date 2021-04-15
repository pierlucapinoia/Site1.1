const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for express config
const viewsPath = path.join(__dirname, '../templates/hbs/views')
const partialsPath = path.join(__dirname, '../templates/hbs/partials')

//Setting hbs config
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    res.render('index')
})

app.listen(3000)