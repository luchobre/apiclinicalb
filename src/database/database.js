import Sequelize from 'sequelize';

export const sequelize = new Sequelize('clinica', 'postgres', '54321', {
    host: 'localhost',
    dialect:'postgres'
});