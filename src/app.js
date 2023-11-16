import express from "express";
import pacientesRoutes from './routes/pacientes.routes.js'
import medicosRoutes from './routes/medicos.routes.js'
import turnosRoutes from './routes/turnos.routes.js'
import dotenv from 'dotenv';
dotenv.config();




const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use(express.json())
app.use(pacientesRoutes);
app.use(medicosRoutes);
app.use(turnosRoutes);

export default app;
