import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {
  const todoData = [
    { label: 'Drink coffee', important: false, id: 1 },
    { label: 'Make awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ]
  return (
    <div className="todo-app">
      <AppHeader />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList 
        todos={todoData} 
        onDeleted={ (id) => console.log('del', id) }/>
    </div>
  )
}

export default App;