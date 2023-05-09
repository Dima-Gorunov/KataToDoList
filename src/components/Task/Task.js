import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

class Task extends Component {
  handleCheckboxChange(e, id) {
    const completed = e.currentTarget.checked;
    this.props.setCompleteThunk(completed, id);
  }

  deleteList(id) {
    this.props.deleteListThunk(id);
  }

  changedList(editing, id) {
    this.props.setEditingThunk(!editing, id);
  }

  changeInputEditing(e, id) {
    const text = e.currentTarget.value;
    this.props.changeEditingList({ id, text });
  }

  submitChange(e, id) {
    e.preventDefault();
    this.props.confirmEditingThunk(id);
  }

  render() {
    const { id, text, createdAt, completed, editing } = this.props.item;
    const distanceToNow = formatDistanceToNow(new Date(createdAt));
    return (
      <li className={`${editing && 'editing'} ${completed && 'completed'}`}>
        <div className="view">
          <input
            className="toggle"
            checked={completed}
            onChange={(e) => this.handleCheckboxChange(e, id)}
            type="checkbox"
          />
          <label>
            <span className="description">{text}</span>
            <span className="created">{distanceToNow}</span>
          </label>
          <button className="icon icon-edit" disabled={completed} onClick={() => this.changedList(editing, id)} />
          <button className="icon icon-destroy" onClick={() => this.deleteList(id)} />
        </div>
        {editing && (
          <form onSubmit={(e) => this.submitChange(e, id)}>
            <input
              ref={this.inputRef}
              type="text"
              onChange={(e) => this.changeInputEditing(e, id)}
              className="edit"
              defaultValue={text}
            />
          </form>
        )}
      </li>
    );
  }
}

Task.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    createdAt: PropTypes.string,
    completed: PropTypes.bool,
    editing: PropTypes.bool,
  }),
};

Task.defaultProps = {
  item: {
    id: '',
    text: '',
    createdAt: '',
    completed: false,
    editing: false,
  },
};

export default Task;
