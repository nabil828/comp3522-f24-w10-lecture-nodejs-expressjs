const express = require('express')
const app = express()
const path = require('path');



app.get("/", (req, res) => {
  res.write("<h1>")
  res.write("All good")
  res.write("</h1>")
  res.end()
})

app.get("/aboutus", (req, res) => {
  res.send("<h1> Welcome to the about us page!</h1>")
})

app.get("/page1", (req, res) => {
  res.send("<h1> Welcome to page1!</h1>")
})

app.use(express.json()) // builtin middleware
app.post("/signup", (req, res) => {
  console.log(req.body);
  res.send(`Hi ${req.body.username}!`)
})

app.delete("/delete", (req, res) => {
  console.log(req.query);
  res.send(`Profile number ${req.query.profile} got deleted!`)
})

// app.put()

app.listen(3000, () => {
  console.log("Successfully listening to port 3000");
})