var React = require('react');
var assign = require('object-assign');
var createReactClass = require('create-react-class');

var inlineBlockStyle = {
  display: 'inline-block'
}

module.exports = createReactClass({

  displayName: 'ReactInlineBlock',

  render() {
    const style = assign({}, this.props.style, inlineBlockStyle);
    const props = assign({}, this.props, { style: style });

    return (<div {...props} />)
  }
});