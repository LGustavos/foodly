const express = require('express')
const details = require("./data")
const routes = express.Router()

routes.get("/home", (req, res) => {
    return res.render("home")
})

routes.get("/sobre", (req, res) => {
    return res.render("sobre")
})

routes.get("/receitas", (req, res) => {
    return res.render("receitas", { items: details })
})

routes.get("/detalhes/:index", (req, res) => {
    const receitas = details
    const receitasIndex = req.params.index
    return res.render("detalhes", { item: receitas[receitasIndex] })
})

module.exports = routes
