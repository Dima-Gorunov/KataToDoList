import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

class NewTaskForm extends Component {
  changeInput(e) {
    const text = e.currentTarget.value;
    this.props.setInputTextThunk(text);
  }

  changeInputMin(e) {
    const text = e.currentTarget.value;
    this.props.setInputMin(text);
  }

  changeInputSec(e) {
    const text = e.currentTarget.value;
    this.props.setInputSec(text);
  }
  submit(e) {
    e.preventDefault();
    const date = new Date().toISOString();
    const List = {
      id: uuidv4(),
      text: this.props.InputText,
      createdAt: date,
      completed: false,
      editing: false,
      minutes: parseInt(this.props.InputMin, 10) || 0,
      seconds: parseInt(this.props.InputSec, 10) || 0,
      timerOnOrOf: false,
    };
    this.props.addListThunk(List);
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.submit(e);
    }
  }

  render() {
    return (
      <div className="header">
        <form onSubmit={(e) => this.submit(e)} className="new-todo-form">
          <input
            className="new-todo"
            placeholder="Task"
            value={this.props.InputText}
            onChange={(e) => this.changeInput(e)}
            onKeyDown={(e) => this.handleKeyDown(e)}
            autoFocus
          />
          <input
            className="new-todo-form__timer"
            placeholder="Min"
            value={this.props.InputMin}
            onChange={(e) => this.changeInputMin(e)}
            onKeyDown={(e) => this.handleKeyDown(e)}
            autoFocus
          />
          <input
            className="new-todo-form__timer"
            placeholder="Sec"
            value={this.props.InputSec}
            onChange={(e) => this.changeInputSec(e)}
            onKeyDown={(e) => this.handleKeyDown(e)}
            autoFocus
          />
        </form>
      </div>
    );
  }
}

NewTaskForm.propTypes = {
  InputText: PropTypes.string,
  InputMin: PropTypes.string,
  InputSec: PropTypes.string,
};

NewTaskForm.defaultProps = {
  InputText: '',
  InputMin: '',
  InputSec: '',
};

export default NewTaskForm;
