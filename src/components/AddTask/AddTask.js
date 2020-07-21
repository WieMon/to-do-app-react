import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddTask.scss';

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0,10);

  static propTypes = {
    add: PropTypes.func,
  }

  state = {
    text: '',
    checked: false,
    date: this.minDate,
  }

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  }

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  }

  handleClick = () => {
    const {text, checked, date} = this.state;

    if(text.length > 2 && text.length < 30) {
      const add = this.props.add(text, date, checked);
      if(add) {
        this.setState({
          text: '',
          checked: false,
          date: this.minDate,
        });
      }
    } else {
      alert('Task cannot be shorter than 2 characters and longer than 20 characters');
    }
  }

  render() {
    let maxDate = this.minDate.slice(0,4) * 1 + 1; //eslint-disable-line
    maxDate = `${maxDate}-12-31`;

    return (
      <div className='AddTask'>
        <div className='AddTask__wrapper'>
          <input className='AddTask__input' type='text' placeholder='task' value={this.state.text} onChange={this.handleText} />
          <div>
            <input className='AddTask__checkbox btn-short' id='important' type='checkbox' checked={this.state.checked} onChange={this.handleCheckbox} />
            <label className='AddTask__label' htmlFor='important'>Important</label>
          </div>
        </div>
        <div className='AddTask__wrapper'>
          <input className='AddTask__input' type='date' value={this.state.date} min={this.minDate} max={this.maxDate} onChange={this.handleDate} />
          <button className='btn-long' onClick={this.handleClick}>Add</button>
        </div>

      </div>
    );
  }
}

export default AddTask;
