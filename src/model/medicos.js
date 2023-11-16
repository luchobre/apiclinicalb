import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Medicos = sequelize.define(
  "medicos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    apellido: {
      type: DataTypes.STRING,
    },
    direccion: {
      type: DataTypes.STRING,
    },
    localidad: {
      type: DataTypes.STRING,
    },
    provincia: {
      type: DataTypes.STRING,
    },
    telefono: {
      type: DataTypes.STRING,
    },
    dni: {
      type: DataTypes.INTEGER,
    },
    fechaNacimiento: {
      type: DataTypes.DATEONLY,
    },
    matricula: {
      type: DataTypes.STRING,
    },
    especialidad: {
      type: DataTypes.STRING,
    },
    fechaIngreso: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    timestamps: true,
  }
);
