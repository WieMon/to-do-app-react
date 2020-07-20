import React, {Component} from 'react';
import AddTask from '../AddTask/AddTask';
import TaskList from '../TaskList/TaskList';
import './App.scss';


class App extends Component {
  counter = 3;
  state = {
    tasks: [
      {
        id: 0,
        text: 'Lorem ipsum dolor sit amet.',
        date: '2020-09-15',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'Suspendisse potenti.',
        date: '2020-08-26',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'Etiam in dapibus nulla.',
        date: '2020-10-10',
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };
    this.counter++;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task],
    }));
    return true;
  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks,
    });
  }

  render() {
    return (
      <div className='App'>
        <h1 className='App__title'>ToDo List</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} change={this.changeTaskStatus} delete={this.deleteTask} />
      </div>
    );
  }
}

export default App;
