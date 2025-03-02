const express = require("express")
const indexRouter = require("./routes/indexRouter")
const app = express()
const cors = require('cors')

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/", indexRouter)

const PORT = 3000 
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  console.log("server not foundz")
})