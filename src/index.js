import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./model/pacientes.js";
import "./model/medicos.js";

async function main() {
  const port = 5432
  try {
    await sequelize.sync({ force: false });
    console.log("Conexion a base de datos exitosa");
    app.listen(port);
    console.log(`Server running on port ${port}`);
  } catch (error) {
    console.error("No funciona el sequelize: ", error);
  }
}

main();
