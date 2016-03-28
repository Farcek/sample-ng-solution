var Moduler = require('foduler').Moduler;

module.exports = new Moduler('wwwRoute', 'route')

    .def('wwwRoute', function ($web$routerFactory, www$app) {

        return $web$routerFactory('/', {
            base: www$app
        });
    })

    .def('home', require('./home'))
    .def('user', require('./user'))

    .def('init', [
        'home', 'user'
    ])
;