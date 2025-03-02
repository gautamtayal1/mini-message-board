const {Router} = require("express")
const indexRouter = Router()

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Hello Brother!",
    user: "Gautam",
    added: new Date()
  },
];

indexRouter.get("/", (req, res) => {
  res.send(messages)
})

indexRouter.post("/", (req, res) => {
  try{
    const {user, text, added} = req.body
    const newEntry = {text: text, user:user, added:added}
    messages.push(newEntry)
    res.send(messages)
  }
  catch(error){
    res.status(400).send("Error: " + error)
  }
})

module.exports = indexRouter