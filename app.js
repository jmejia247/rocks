// DEPENDENCIES
const express = require("express");
const rocks = require("./models/rocks");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to express minerals app")
});

app.get("/rocks", (req, res) => {
    res.send(rocks)
})

app.get("/rocks/:rock", (req, res) => {
    const reqRock = req.params.rock
    const foundRock = rocks.find((rock) => rock.toLowerCase() === reqRock.toLowerCase())

    if (foundRock) {
        res.send(`The rock: ${foundRock}, has been purchased for the price of one million billion dollars`)
    } else {
        res.send(`The rock you requested: ${reqRock}, does not exist in our database or is not for sale on our site`)
    }

})

// app.get("/rocks/:index", (req, res) => {
//     const index = req.params.index

//     if (rocks[index]) {
//         res.send(rocks[index]);
//     } else {
//         res.send("cannot find any rocks at this index: " + index);
//     }
// })

app.get("/rocks/:rock/:color", (req, res) => {
    const {rock, color} = req.params
    res.send(`The rock ${rock} is availablein the color: ${color}, buy now!`)
})

app.get("/metals/:type", (req, res) => {
    console.log("this is params", req.params)
    console.log("this is query", req.query)
    res.send("Metal shop")
})

app.get("*", (req, res) => {
    res.status(404).send(`<h1>*Waves hand* this is not the page you are looking for</h1><a href="/" >Please return Home</a>`)
})

// EXPORT
module.exports = app;