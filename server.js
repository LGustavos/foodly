const express = require('express')
const nunjucks = require('nunjucks')


const server = express()

server.use(express.static('assets'))
server.use(express.static('public'))

server.set("view engine", "html")
nunjucks.configure("src", {
    express: server
})


server.get("/", (req, res) => {
    return res.render("index")
})

server.get("/sobre", (req, res) => {
    return res.render("sobre")
})

server.get("/receitas", (req, res) => {
    return res.render("receitas")
})

server.listen(5000, () => {
    console.log("server is running")
})