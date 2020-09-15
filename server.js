const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const foods = require("./datarecipe")
const recipes = require("./datarecipe")

server.use(express.static('public'))

server.use(express.static('assets'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    return res.render("init")
})

server.get("/portfolio", function(req, res) {
    return res.render("portfolio", { items: foods }) 
})

server.get("/about", function(req, res) {
    return res.render("about")
})

server.get("/recipe", function(req, res) {
    const id = req.query.id

    const recipe = recipes.find(function(recipe){
        if (recipe.id == id) {
            return true
        }
    })

    if (!recipe) {
        return res.send("Not found")
    }

    return res.render("recipe", { item: recipe }) 
})

server.listen(5000, function() {
    console.log("server is runing")
})