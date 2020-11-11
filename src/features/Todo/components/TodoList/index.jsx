import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import TodoForm from '../TodoForm';
import './styles.scss';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
}

function TodoList({ todoList, onTodoClick }) {
  // const { } = props;

  const handleTodoClick = (todo, idx) => {
    if (!onTodoClick) return;

    onTodoClick(todo, idx);
  }

  const handleTodoFormSubmit = (values) => { 
    console.log('Form submit', values)
  }

  return (
    <div>
      <h3>What to do?</h3>

      <TodoForm onSubmit={handleTodoFormSubmit} />

      <ul className='todo-list'>
        {todoList.map( (todo, idx) => (
          <li
            key={todo.id}
            className={classnames({
              'todo-item': true,
              completed: todo.status === 'completed',
              
            })}
            onClick={() => handleTodoClick(todo, idx)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;