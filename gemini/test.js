var gemini = require('gemini');

gemini.suite('grid', function () {

    ['default', 'order'].forEach(function (fixture) {

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
