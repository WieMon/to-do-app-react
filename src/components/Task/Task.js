import React from 'react';
import PropTypes from 'prop-types';

const Task = (props) => {
  const{id, text, date, important, active, finishDate} = props.task;

  const style = {
    color: 'red',
  };

  if(active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> - <span>{date} </span>
          <button onClick={() => props.change(id)}>Done</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div>
        <p>
          <strong>{text}</strong><em>(Due date: {date})</em>
          <br />
          (Completed: <span>{finish}</span>)
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
};

Task.propTypes = {
  text: PropTypes.string,
  task: PropTypes.object,
  change: PropTypes.func,
  delete: PropTypes.func,
  finishDate: PropTypes.object,
};

export default Task;
