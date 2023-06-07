import express from "Express";
import usuarioRoutes from "./routes/usuario.routes.js";


const app = express();
app.use(express.json());
app.use(usuarioRoutes);

export default app;