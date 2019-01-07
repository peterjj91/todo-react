import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink coffee"),
      this.createTodoItem("Make awesome App"),
      this.createTodoItem("Have a lunch")
    ]
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);

      // Cannot change original todoData
      // Our new array without element
      const newArray = [
        ...todoData.slice(0, idx), 
        ...todoData.slice(idx + 1)
      ]

      return {
        todoData: newArray // set new array 
      }
    });
  };

  addItem = (text) => {
    // create new item with new id
    const newItem = this.createTodoItem(text);
    
    // set new item
    this.setState(({todoData}) => {
      const newArray = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArray
      };
    })
  };

  onToggleImportant = (id) => {
    console.log('Toggle important -', id);
  };

  onToggleDone = (id) => {
    console.log("Done ", id);
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList 
          todos={this.state.todoData} 
          onDeleted={ this.deleteItem }
          onToggleImportant={this.onToggleImportant}
          onToggleDone = {this.onToggleDone}/>
        <ItemAddForm 
          onItemAdded={this.addItem}/>
      </div>
    )
  }
};