import React from 'react';
import PropTypes from 'prop-types';
import './Task.scss';

const Task = (props) => {
  const{id, text, date, important, active, finishDate} = props.task;

  const style = {
    color: 'red',
  };

  if(active) {
    return (
      <div className='Task'>
        <div className='Task__active-one'>
          <strong style={important ? style : null}>{text}</strong> <span>({date}) </span>
        </div>
        <div className='Task__active-two'>
          <button className='btn-long' onClick={() => props.change(id)}>Done</button>
          <button className='Task__btn-delete' onClick={() => props.delete(id)}>X</button>
        </div>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toISOString().slice(0,10);

    return (
      <div className='Task'>
        <div className='Task__done'>
          <strong>{text}</strong> <span>({date}) </span>
          <br />
          <span>(Completed on: {finish})</span>
        </div>
        <div className='Task__done'>
          <button className='Task__btn-delete' onClick={() => props.delete(id)}>X</button>
        </div>
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
