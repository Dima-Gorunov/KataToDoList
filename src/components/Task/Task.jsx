import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import TimerContainer from '../Timer/TimerContainer';

const Task = (props) => {
  const handleCheckboxChange = (e, id) => {
    const completed = e.currentTarget.checked;
    props.setCompleteThunk(completed, id);
  };

  const deleteList = (id) => {
    props.deleteListThunk(id);
  };

  const changedList = (editing, id) => {
    props.setEditingThunk(!editing, id);
  };

  const changeInputEditing = (e, id) => {
    const text = e.currentTarget.value;
    props.changeEditingList({ id, text });
  };

  const submitChange = (e, id) => {
    e.preventDefault();
    props.confirmEditingThunk(id);
  };

  const { id, text, createdAt, completed, editing, minutes, seconds, timerOnOrOf, inc } = props.item;
  const distanceToNow = formatDistanceToNow(new Date(createdAt));
  return (
    <li className={`${editing && 'editing'} ${completed && 'completed'}`}>
      <div className="view">
        <input className="toggle" checked={completed} onChange={(e) => handleCheckboxChange(e, id)} type="checkbox" />
        <label>
          <span className="title">{text}</span>
          {!completed && (
            <TimerContainer
              id={id}
              timerOnOrOf={timerOnOrOf}
              completed={completed}
              minutes={minutes}
              seconds={seconds}
              inc={inc}
            />
          )}
          <span className="description">{distanceToNow}</span>
        </label>
        <button className="icon icon-edit" disabled={completed} onClick={() => changedList(editing, id)} />
        <button className="icon icon-destroy" onClick={() => deleteList(id)} />
      </div>
      {editing && (
        <form onSubmit={(e) => submitChange(e, id)}>
          <input type="text" onChange={(e) => changeInputEditing(e, id)} className="edit" defaultValue={text} />
        </form>
      )}
    </li>
  );
};

Task.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    createdAt: PropTypes.string,
    completed: PropTypes.bool,
    editing: PropTypes.bool,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
    timerOnOrOf: PropTypes.bool,
    dec: PropTypes.bool,
    inc: PropTypes.bool,
  }),
};

Task.defaultProps = {
  item: {
    id: '',
    text: '',
    createdAt: '',
    completed: false,
    editing: false,
    minutes: 0,
    seconds: 0,
    timerOnOrOf: false,
    dec: false,
    inc: false,
  },
};

export default Task;
