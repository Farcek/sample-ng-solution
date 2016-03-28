module.exports = function (wwwRoute, $web$routerFactory) {

    var route = $web$routerFactory('/user', {
        base: wwwRoute
    });

    route.get('/', function (req, res) {
        res.send('user list');
    });
}