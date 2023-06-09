import express from "express";
import usuarioRoutes from "./routes/usuario.routes.js";
import fotoRoutes from "./routes/foto.routes.js";
import productoRoutes from "./routes/producto.routes.js";
import tarjetaRecarga from "./routes/tarjetaRecarga.routes.js";


const app = express();
app.use(express.json());
app.use(usuarioRoutes);
app.use(fotoRoutes);
app.use(productoRoutes);
app.use(tarjetaRecarga);

export default app;