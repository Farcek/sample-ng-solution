var Sequelize = require('sequelize');
var Moduler = require('foduler').Moduler;

module.exports = new Moduler('core model','model')
    .def('Sequelize', function () {
        return Sequelize;
    })
    .def('models1', function () {
        return new Sequelize('test', 'root', '1122', {
            host: 'localhost',
            dialect: 'mysql',//|'mariadb'|'sqlite'|'postgres'|'mssql',

            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },

            // SQLite only
            //storage: 'path/to/database.sqlite'
        });
    })
    .def('default', function (models1) {
        return models1;
    })
;
