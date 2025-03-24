import { Sequelize } from "sequelize";

const dbName = process.env.DATABASE_NAME
const dbPassword = process.env.DATABASE_PASSWORD
const dbUser = process.env.DATABASE_USER

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: "localhost",
    dialect: "mariadb",
    logging: false
})


export default sequelize