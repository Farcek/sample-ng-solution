/**
 * Created by Administrator on 3/25/2016.
 */

var Moduler = require('foduler').Moduler;
var core = require('../core');
var $web = require('foduler/module-web');
var $view = require('foduler/module-view');

module.exports = new Moduler('www')
    .include(core)
    .include($web)
    .include($view)
    .include(require('./route'))
    .def('app', function (core$config, $web$morgan, $web$favicon, $web$appFactory, $web$promiseExpress) {
        // express app factory
        var app = $web$appFactory();

        // favicon icon
        app.use($web$favicon(core$config.global.assetPath + '/favicon.ico'));

        // access log
        if (core$config.log.access) {
            app.use($web$morgan(core$config.log.access));
        }
        // attache promise response
        app.use($web$promiseExpress);

        return app;
    })
    .run(['route$init', function ($view$engine, core$config) {
        $view$engine.addPath(__dirname + '/view');
        $view$engine.addPath(core$config.global.viewPath);
    }])
    .on('postRun', function (app, core$config, $view$engine) {
        $view$engine.apply(app);

        app.listen(core$config.port || config.app.port, function () {
            var port = this.address().port;
            console.log('`%s` starting. use port:%s', "solution service", port);
        });
    })
;