import express from "Express";
import usuarioRoutes from "./routes/usuario.routes.js";
import fotoRoutes from "./routes/foto.routes.js";
import productoRoutes from "./routes/producto.routes.js";

const app = express();
app.use(express.json());
app.use(usuarioRoutes);
app.use(fotoRoutes);
app.use(productoRoutes);
export default app;