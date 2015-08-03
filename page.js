var React = require('react');
var grid = require('./index');
var bulk = require('bulk-require');
var FIXTURES = bulk(__dirname + '/fixtures', '*.js');

var Fixture = React.createClass({

    getAttributes: function () {
        return FIXTURES[this.props.fixture] || FIXTURES.defult;
    },

    getInitialState: function () {
        var hash = window.location.hash;
        return hash && FIXTURES[hash.substring(1)] || FIXTURES.default;
    },

    componentDidMount: function () {
        window.addEventListener('hashchange', this.onHashChange, false);
    },

    componentWillUnmount: function () {
        window.removeEventListener('hashchange', this.onHashChange);
    },

    onHashChange: function () {
        this.setState(this.getInitialState());
    },

    render: function () {
        return React.createElement(
            grid.Container,
            this.state.grid,
            this.state.items.map(function (item, index) {
                item.props.key = index;
                return React.createElement(
                    grid.Item,
                    item.props,
                    React.createElement('div', item.placeholder)
                );
            })
        );
    }

});


React.render(
    React.createElement(Fixture),
    document.getElementById('fixture')
);
