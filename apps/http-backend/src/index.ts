import express from "express"
import jwt from "jsonwebtoken"
import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common/config";
import {CreateuserSchema, SigninSchema, CreateRoomSchema} from "@repo/common/types"

const app = express()
app.use(express.json());

app.post("/signup", async(req, res) => {
    const data = CreateuserSchema.safeParse(req.body);
    if(!data.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }
    res.json({
        userId: "123"
    })
})

app.post("/signin", async(req, res) => {
    const data = SigninSchema.safeParse(req.body);
    if(!data.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }
    const userId = 1
    const token = jwt.sign({
        userId
    }, JWT_SECRET as string)
    res.json({
        token
    })
})

app.post("/room",middleware, async(req, res) => {
    const data = CreateRoomSchema.safeParse(req.body);
    if(!data.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }
    res.json({
        roomId: 123
    })
})

app.listen(3001);