const express=require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())

async function main(){
await mongoose.connect('mongodb+srv://robinkumardbg11:aPTJ!E8LbWEgZZf@first.qxoadwq.mongodb.net/Spotify?retryWrites=true&w=majority&appName=First')
console.log("db connected")
}
main();


