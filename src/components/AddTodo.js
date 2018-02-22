import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {

  render() {

    return (
      <div>
        <input type='text' ref="input"/>
        <button onClick={(e) => this.handleClick(e)} >
          Add
        </button>
      </div>
    )
  };

  handleClick = (e) => {
    const node = ReactDOM.findDOMNode(this.refs.input);
    const text = node.value.trim();
    this.props.onAddCLick(text);
    node.value = '';
  }

};

AddTodo.propTypes = {
  onAddCLick: PropTypes.func.isRequired
}
