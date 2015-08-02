var React = require('react');
var classes = require('./item.css');
var classUtils = require('./class-utils');

module.exports = React.createClass({

    propTypes: {
        span: React.PropTypes.oneOfType([
            React.PropTypes.number,
            React.PropTypes.objectOf(React.PropTypes.number)
        ])
    },

    getDefaultProps: function () {
        return {
        };
    },

    render: function () {
        var classNames = [classes.item];
        classNames = classNames.concat(
            classUtils.prefix('span', this.props.span, classes)
        );
        classNames = classNames.concat(
            classUtils.prefix('order', this.props.order, classes)
        );
        return React.createElement(
            'div',
            {
                className: classNames.join(' ')
            },
            this.props.children
        );
    }

});
