import Sequelize from 'sequelize';

const password = process.env.PASSWORDPS

export const sequelize = new Sequelize('clinica', 'fl0user', password, {
    host: 'ep-small-butterfly-26485819.us-east-2.aws.neon.fl0.io',
    dialect:'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});