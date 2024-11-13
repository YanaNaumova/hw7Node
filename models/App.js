import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const App = sequelize.define(
  "App",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: { type: DataTypes.FLOAT, allowNull: false },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "Apps",
    timestamps: false,
  }
);

export default App;
