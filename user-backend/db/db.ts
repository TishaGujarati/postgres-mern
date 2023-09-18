import { Sequelize } from "sequelize";
import { CONFIG } from "../src/config";

const sequelize = new Sequelize(
  `${CONFIG.PGDATABASE}`,
  `${CONFIG.PGUSER}`,
  `${CONFIG.PGPASSWORD}`,
  {
    dialect: "postgres",
    host: "localhost",
    port: CONFIG.PGPORT,
  }
);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Postgress Connected");
  })
  .catch((error) => {
    console.log(error);
  });

export default sequelize;
