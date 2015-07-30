var gemini = require('gemini');


if (process.env.TRAVIS_JOB_NUMBER) {
    gemini.on('startRunner', function () {
        gemini.config.browsers.forEach(function(browser) {
            browser['tunnel-identifier'] = process.env.TRAVIS_JOB_NUMBER;
        });
    });
}

gemini.suite('grid', function () {

    ['default'].forEach(function (fixture) {

        gemini.suite(fixture, function (suite) {
            suite.setUrl('#' + fixture)
                .setCaptureElements('#fixture')
                .capture('desktop', function (actions) {
                    actions.setWindowSize(900, 800);
                })
                .capture('tablet', function (actions) {
                    actions.setWindowSize(700, 800);
                })
                .capture('mobile', function (actions) {
                    actions.setWindowSize(480, 800);
                });
        });

    });

});
