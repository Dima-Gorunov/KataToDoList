import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const NewTaskForm = (props) => {
  const changeInput = (e) => {
    const text = e.currentTarget.value;
    props.setInputTextThunk(text);
  };

  const changeInputMin = (e) => {
    const text = e.currentTarget.value;
    props.setInputMin(text);
  };

  const changeInputSec = (e) => {
    const text = e.currentTarget.value;
    props.setInputSec(text);
  };
  const submit = (e) => {
    e.preventDefault();
    const date = new Date().toISOString();
    const List = {
      id: uuidv4(),
      text: props.InputText,
      createdAt: date,
      completed: false,
      editing: false,
      minutes: parseInt(props.InputMin, 10) || 0,
      seconds: parseInt(props.InputSec, 10) || 0,
      timerOnOrOf: false,
    };
    props.addListThunk(List);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      submit(e);
    }
  };

  return (
    <div className="header">
      <form onSubmit={(e) => submit(e)} className="new-todo-form">
        <input
          className="new-todo"
          placeholder="Task"
          value={props.InputText}
          onChange={(e) => changeInput(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          autoFocus
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          value={props.InputMin}
          onChange={(e) => changeInputMin(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          autoFocus
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          value={props.InputSec}
          onChange={(e) => changeInputSec(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          autoFocus
        />
      </form>
    </div>
  );
};

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
