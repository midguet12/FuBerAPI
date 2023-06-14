import express from "express";
import usuarioRoutes from "./routes/usuario.routes.js";
import fotoRoutes from "./routes/foto.routes.js";
import productoRoutes from "./routes/producto.routes.js";
import tarjetaRecarga from "./routes/tarjetaRecarga.routes.js";
import jwt from 'jsonwebtoken';
import 'dotenv/config'

const secret = process.env.SECRET;
import tarjetaBancaria from "./routes/tarjetaBancaria.routes.js";
import tarjetaBancaria from "./routes/tarjetaBancaria.routes.js"
import  pedido  from "./routes/pedido.routes.js";


const app = express();

app.post("/token", (req,res) => {
    const {sub, name} = { sub: "Midguet", name: "Arturo"};
    const token = jwt.sign({
        sub,
        name,
        exp: Date.now() + 60 * 1000
    }, secret);
    res.send({token});
})

app.get("/public", (req,res) => {

    res.send("Soy publico");
})

app.get("/private", (req,res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);

        if (Date.now > payload.exp) {
            return res.status({error: "token expirado"})            
        } 
        res.send("Soy privado");
    } catch (error) {
        res.status(401).send({error: error.message})
    }
    
})


app.use(express.json());
app.use(usuarioRoutes);
app.use(fotoRoutes);
app.use(productoRoutes);
app.use(tarjetaRecarga);
app.use(tarjetaBancaria)
app.use(pedido)
export default app;