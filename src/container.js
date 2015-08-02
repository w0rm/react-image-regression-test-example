var React = require('react');
var classes = require('./container.css')
var classUtils = require('./class-utils');

module.exports = React.createClass({

    propTypes: {
        span: React.PropTypes.oneOfType([
            React.PropTypes.bool,
            React.PropTypes.objectOf(React.PropTypes.bool)
        ])
    },

    getDefaultProps: function () {
        return {
            wrap: { phone: true, tablet: true, desktop: true }
        };
    },

    render: function () {
        var classNames = [classes.container];
        classNames = classNames.concat(classUtils.prefix('wrap', this.props.wrap, classes));

        return React.createElement(
            'div',
            {
                className: classNames.join(' ')
            },
            this.props.children
        );
    }

});
