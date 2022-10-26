const express = require("express");
const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Practicando endpoints")
});

app.get('/productos/:name', (req, res) => {
    res.send("Listado de productos: ")
});

app.post("/productos", (req, res) => {
    res.send("Crear un producto: ");
});

app.put("/productos", (req, res) => {
    res.send("Actualizar un producto: ");
});

app.delete("/productos", (req, res) => {
    res.send("Borrar un producto: ");
});

app.get("/usuarios", (req, res) => {
    res.send("Listado de usuarios: ");
});

app.post("/usuarios", (req, res) => {
    res.send("Crear un usuario: ");
});

app.put("/usuarios", (req, res) => {
    res.send("Actualizar usuario: ");
});

app.delete("/usuarios", (req, res) => {
    res.send("Borrar un usuario: ");
});



app.listen("3000", () => {
    console.log("Servidor levantado en el puerto 3000");
});