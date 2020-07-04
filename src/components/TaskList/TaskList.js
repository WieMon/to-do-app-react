import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task//Task';

const TaskList = (props) => {
  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);


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
    <>
      <div className='active'>
        <h2>Tasks to do</h2>
        {activeTasks}
      </div>
      <div className='done'>
        <h2>Tasks done</h2>
        {doneTasks}
      </div>
    </>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  change: PropTypes.func,
  delete: PropTypes.func,
};

export default TaskList;
