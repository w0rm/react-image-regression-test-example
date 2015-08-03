var gemini = require('gemini');
var bulk = require('bulk-require');
var FIXTURES = bulk(__dirname + '/../fixtures', '*.js');

gemini.suite('grid', function () {

    Object.keys(FIXTURES).forEach(function (fixture) {

        gemini.suite(fixture, function (suite) {
            suite.setUrl('#' + fixture)
                .setCaptureElements('#fixture')
                .capture('desktop', function (actions) {
                    actions.setWindowSize(900, 800);
                })
                .capture('tablet', function (actions) {
                    actions.setWindowSize(700, 800);
                })
                .capture('phone', function (actions) {
                    actions.setWindowSize(480, 800);
                });
        });

    });

});
