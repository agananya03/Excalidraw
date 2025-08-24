import express from "express"
import jwt from "jsonwebtoken"
import { middleware } from "./middleware";
const JWT_SECRET = process.env.JWT_SECRET;

const app = express()
app.use(express.json());

app.post("/signup", async(req, res) => {

})

app.post("/signin", async(req, res) => {
    
    const userId = 1
    const token = jwt.sign({
        userId
    }, JWT_SECRET)
    res.json({
        token
    })
})

app.post("/room",middleware, async(req, res) => {
    res.json({
        roomId: 123
    })
})

app.listen(3001);