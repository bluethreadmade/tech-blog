require('dotenv').config();

const Sequelize = require('sequelize');

let sequelize;

if (process.env.DB_URL) {
    sequelize = new Sequelize(process.env.DB_URL, {
        hooks: {
            beforeDefine: function (columns, model) {
              model.tableName = `${process.env.DB_NAME}_${model.name.singular}`;
            },
          },
        });
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
        host: 'localhost',
        dialect: 'postgres',
        }
    );
}

module.exports = sequelize;

