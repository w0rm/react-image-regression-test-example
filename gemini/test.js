var gemini = require('gemini');
var bulk = require('bulk-require');
var FIXTURES = bulk(__dirname + '/../fixtures', '*.js');

gemini.suite('grid', function () {

    for (var fixture in FIXTURES) {

        gemini.suite(fixture, function (suite) {

            if (FIXTURES[fixture].skip) {
                suite.skip(FIXTURES[fixture].skip);
            }

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

    };

});
