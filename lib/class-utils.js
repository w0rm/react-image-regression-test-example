var sizes = ['phone', 'tablet', 'desktop'];

module.exports =  {
    sizes: sizes,
    prefix: function (name, values, classes) {
        var result = [];
        if (!values) {
            return result;
        }
        for (var index in values) {
            if (typeof values[index] === 'boolean') {
                if (values[index]) {
                    result.push(classes[index + '-' + name]);
                }
            } else {
                result.push(classes[index + '-' + name + '-' + values[index]]);
            }
        };
        return result;
    }
}
