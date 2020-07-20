import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task//Task';
import './TaskList.scss';

const TaskList = (props) => {
  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
  }

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1;
      }
      if (a.finishDate > b.finishDate){
        return -1;
      }
      return 0;
    });
  }

  const activeTasks = active.map(task =>
    <Task
      key={task.id}
      task={task}
      change={props.change}
      delete={props.delete}
    />);

  const doneTasks = done.map(task =>
    <Task
      key={task.id}
      task={task}
      change={props.change}
      delete={props.delete}
    />);

  return (
    <div className='TaskList'>
      <div className='TaskList__active active'>
        <h2 className='TaskList__title-active' >Tasks to do</h2>
        {activeTasks}
      </div>
      <div className='TaskList__done done'>
        <h2 className='TaskList__title-done'>Tasks done</h2>
        {doneTasks}
      </div>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  change: PropTypes.func,
  delete: PropTypes.func,
};

export default TaskList;
