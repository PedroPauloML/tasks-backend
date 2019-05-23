const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.get("/:valor", (req, res, next) => {
  console.log("Func 0")
  
  next()
})

app.get("/:valor", (req, res) => {
  console.log("Func 1")
  response = "Parâmetro = " + req.params.valor +
    "; Query = " + Array.from(Object.keys(req.query)).map(k => `${k}: ${req.query[k]}`).join(", ")
  res.status(200).send(response)
})

app.listen(3000, () => {
  console.log("Backend executando...")
})