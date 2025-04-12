import express from "express"
const app = express();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


app.get("/", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users)
})

app.post("/", async (req, res) => {
    const user = await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    res.json({ user })
})


app.listen("3000", () => {
    console.log("running on port 3000");
})

