module.exports = function (wwwRoute,www$app) {
    wwwRoute.get('/', function (req, res) {
        res.render('lay');
    })
}