import React, { useState } from 'react';
import TodoList from './components/TodoList';


function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new'
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Code',
      status: 'new'
    },
  ]

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState('all')

  const handleTodoClick = (todo, idx) => {
    console.log(todo, idx);
    //clone current array to new array
    const newTodoList = [...todoList]
    //toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    // update todo
    setTodoList(newTodoList)
  }

  const handleShowAllClick = () => {
    setFilteredStatus('all');
  }
  const handleShowCompletedClick = () => {
    setFilteredStatus('completed');
  }
  const handleShowNewClick = () => {
    setFilteredStatus('new');
  }

  const renderTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;