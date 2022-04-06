const app = require("express")();
const express = require("express")

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
const users = [
    {
        name: "A",
        email: "a@yopmail.com"
    },
    {
        name: "B",
        email: "b@yopmail.com"
    },
    {
        name: "C",
        email: "c@yopmail.com"
    }
]
const tagline = "No programming concept is complete without a cute animal mascot.";


app.get('/', (req, res) => {

    return res.render('pages/index', {
        users,
        tagline
    })
})

app.get('/about', (req, res) => {
    return res.render('pages/about')
})

app.get('/contact', (req, res) => {
    return res.render('pages/contact')
})


app.listen(4000, () => {
    console.log("App is running on localhost:4000");
})