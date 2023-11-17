import Sequelize from 'sequelize';

const password = process.env.PASSWORDPS

export const sequelize = new Sequelize('clinica', 'postgres', password, {
    host: 'localhost',
    dialect:'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});