var Gemini = require('gemini/api');
var gemini = new Gemini('./.gemini.yml');

if (process.env.TRAVIS_JOB_NUMBER) {
    gemini.on('startRunner', function () {
        gemini.config.browsers.forEach(function (browser) {
            browser['tunnel-identifier'] = process.env.TRAVIS_JOB_NUMBER;
        });
    });
}

gemini.test(
    ['./test.js'],
    {reporters: ['flat']}
).then(function (results) {
    if (results.failed > 0) {
        process.exit(1);
    }
});
