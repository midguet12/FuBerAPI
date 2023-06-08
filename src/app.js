import express from "Express";
import usuarioRoutes from "./routes/usuario.routes.js";
import tarjetaRecarga from "./routes/tarjetaRecarga.routes.js";


const app = express();
app.use(express.json());
app.use(usuarioRoutes);
app.use(tarjetaRecarga);

export default app;