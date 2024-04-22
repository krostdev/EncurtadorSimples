const Links = require("./models/Link")
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const env = require("dotenv/config")
const { join } = require("path")

const app = express()

app.use(express.json())
app.use(cors())

app.post("/encurtar", async(req, res) => {
    const { link } = req.body

    if (!link) {
        return res.status(400).json({ response: "Não foi possivel obter \"link\" no body." })
    }

    const regex = /^(http|https):\/\/[^ "]+$/;
    if (!regex.test(link)) {
        return res.status(400).json({ response: "Insira um link válido! Exemplo: http://google.com" })
    }

    const gerarId = (length) => {
        let id = ""
        let characters = "a1b2c3d4e56f7G8H9I0JklmnOPQRSTuvWXyZ"

        for (let i = 0; i < length; i++) {
            id += characters.charAt(Math.floor(Math.random() * characters.length))
        }

        return id;
    }

    const linkId = gerarId(7)

    await new Links({
        linkId,
        linkUrl: link
    }).save()

    res.status(200).json({
        link,
        linkId,
        encurtedUrl: `https://${req.hostname}/${linkId}`
    })
})

app.get("/:linkId", async(req, res) => {
    const linkId = req.params.linkId

    const Link = await Links.findOne({ linkId: linkId })

    if(!Link) {
        return res.status(400).json({ response: `Não foi encontrado um link com o id ${linkId}` })
    }

    res.redirect(`${Link.get("linkUrl")}`)
})

app.get("/b", (req, res) => {
    res.send("teste")
})

app.listen(80, () => {
    mongoose.connect(process.env.MONGO_URI).then(() => console.log("Sucesso (1)"))
    console.log("Sucesso (2)")
})