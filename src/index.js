import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./model/pacientes.js";
import "./model/medicos.js";

async function main() {
  try {
    await sequelize.sync({ force: false });
    console.log("Conexion a base de datos exitosa");
    app.listen(3001);
    console.log("Server running on port 3001");
  } catch (error) {
    console.error("No funciona el sequelize: ", error);
  }
}

main();
