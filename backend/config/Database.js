import { Sequelize } from "sequelize";

const db = new Sequelize('up_db','root','', {
    host: 'localhost',
    dialect: "mysql"
});

export default db;