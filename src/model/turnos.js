// import { DataTypes } from "sequelize";
// import { sequelize } from "../database/database.js";

// export const Turnos = sequelize.define(
//   "turnos",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     idPaciente: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: 'pacientes',
//             key: 'id',
//         },
//         foreignKey:true
//     },
//     idMedico: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: 'medicos',
//             key: 'id',
//         },
//         foreignKey:true
//     },
//     especialidad: {
//        type: DataTypes.STRING
//     },
//     fechaTurno: {
//        type: DataTypes.DATE
//     },
//     obraSocial: {
//        type: DataTypes.STRING
//     },

//   },
//   {
//     timestamps: true,
//   }
// );

// En un archivo como turnos.js

import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Pacientes } from "./pacientes.js";
import { Medicos } from "./medicos.js";

export const Turnos = sequelize.define(
  "turnos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
      idMedico: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Medicos,
          key: 'id',
        },
      },
      idPaciente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Pacientes,
          key: 'id',
        },
      },
    fecha: {
      type: DataTypes.DATEONLY,
    },
    hora: {
      type: DataTypes.TIME,
    },
    obraSocial: {
      type: DataTypes.STRING,
    },
    especialidad: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    name: {
      singular: 'Turno',
      plural: 'Turnos',
    },
  }
);

// Relaciones entre modelos
Turnos.belongsTo(Medicos, { foreignKey: 'idMedico', as: 'medico' });
Turnos.belongsTo(Pacientes, { foreignKey: 'idPaciente', as: 'paciente' });