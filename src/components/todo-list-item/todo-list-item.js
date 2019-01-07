import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  // Варианты инициализации состояния
  // constructor() {
  //   super();
  //   this.state = {
  //     done: false
  //   };
  // }
  state = {
    done: false,
    important: false
  }

  // Варианты реализация клика
  // constructor() {
  //   super();
  //   this.onLabelClick = () => {
  //     console.log(`Done: ${this.props.label}`);
  //   }
  // }
  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done // меняем на противоположное значение
      }
    });
  }

  onMarkImportant = () => {
    this.setState(({important}) => {
      return {
        important: !important  
      }
    });
  }

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state; // состояние

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={ this.onLabelClick }>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
      );
  }
}