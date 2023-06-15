import express from "express";
import usuarioRoutes from "./routes/usuario.routes.js";
import tiendaRoutes from "./routes/tienda.routes.js";
import productoRoutes from "./routes/producto.routes.js";
import tarjetaRecargaRoutes from "./routes/tarjetaRecarga.routes.js";
import pedidoRoutes  from "./routes/pedido.routes.js";


const app = express();

app.use(express.json());
app.use(usuarioRoutes);
app.use(productoRoutes);
app.use(tarjetaRecargaRoutes);
app.use(pedidoRoutes);
app.use(tiendaRoutes);
export default app;