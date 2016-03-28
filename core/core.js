/**
 * Created by Administrator on 3/25/2016.
 */
var etc = require('etc');
module.exports = new (require('foduler').Moduler)('core')
    .include(require('./model'))

    .def('config', function () {
        var _conf = etc()
            .argv()
            .env()
            .etc()
            .pkg();

        var config = _conf.toJSON();
        var env = config.env || (config.env = 'prod');



        if (env && config[env]) {
            var conf = config[env];
            Object.assign(config, conf);
            delete config[env];
        }

        config.port = 4545;
        console.log('`%s` config loaded .. ', env);
        return config;
    })


