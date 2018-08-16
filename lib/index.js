'use strict';

var React = require('react');
var assign = require('object-assign');
var createReactClass = require('create-react-class');

var inlineBlockStyle = {
  display: 'inline-block'
};

module.exports = createReactClass({

  displayName: 'ReactInlineBlock',

  render: function render() {
    var style = assign({}, this.props.style, inlineBlockStyle);
    var props = assign({}, this.props, { style: style });

    return React.createElement('div', props);
  }
});