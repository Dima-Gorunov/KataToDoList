import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

class NewTaskForm extends Component {
  changeInput(e) {
    const text = e.currentTarget.value;
    this.props.setInputTextThunk(text);
  }

  submit(e) {
    e.preventDefault();
    const date = new Date().toISOString();
    const List = {
      id: uuidv4(),
      text: this.props.inputText,
      createdAt: date,
      completed: false,
      editing: false,
    };
    this.props.addListThunk(List);
  }

  render() {
    return (
      <div className="header">
        <form onSubmit={(e) => this.submit(e)}>
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={this.props.inputText}
            onChange={(e) => this.changeInput(e)}
            autoFocus
          />
        </form>
      </div>
    );
  }
}

export default NewTaskForm;
