import express from "express";

const app = express();

const equipamentos = [
    {
        id: 1,
        name: "Demon Helmet",
        hp: 6,
        def: 6,
        criRate: 6 
    },
    {
        id: 2,
        name: "Dragon Helmet",
        hp: 12,
        def: 15,
        critRate: 7
    },
    {
        id: 3,
        name: "Elixir Helmet",
        hp: 20,
        def: 12,
        critRate: 1
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Logica rpg")
})

app.get("/equipamentos", (req, res) => {
    res.status(200).json(equipamentos)
})

export default app;