var sizes = ['phone', 'tablet', 'desktop'];
var types = {
    boolean: true,
    string: true,
    number: true
};

module.exports =  {
    sizes: sizes,
    prefix: function (name, values, classes) {
        var result = [];
        if (values === undefined) {
            return result;
        }
        if (types[typeof values]) {
            if (typeof values === 'boolean') {
                if (values) {
                    result.push(classes[name]);
                }
            } else {
                result.push(classes[name + '-' + values]);
            }
        } else {
            for (var index in values) {
                if (typeof values[index] === 'boolean') {
                    if (values[index]) {
                        result.push(classes[index + '-' + name]);
                    }
                } else {
                    result.push(classes[index + '-' + name + '-' + values[index]]);
                }
            }

        }
        return result;
    }
};
