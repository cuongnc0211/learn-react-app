import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';


function ListPage(props) {
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

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    const params = queryString.parse(location.search)
    setFilteredStatus(params.status || 'all')
  })

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search)
    return params.status || 'all'
  })

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
    // setFilteredStatus('all');
    const queryParams = { status: 'all' }
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    })
  }
  const handleShowCompletedClick = () => {
    // setFilteredStatus('completed');
    const queryParams = { status: 'completed' }
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    })
  }
  const handleShowNewClick = () => {
    // setFilteredStatus('new');
    const queryParams = { status: 'new' }
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    })
  }

  const handleTodoFormSubmit = (values) => {
    const newTodo = {
      id: todoList[todoList.length - 1]?.id + 1,
      title: values.title,
      status: 'new'
    }
    console.log(newTodo)

    const newTodoList = [...todoList, newTodo]

    setTodoList(newTodoList)
  }

  // do filter in normal way
  // const renderTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);

  // do filter when list and filter change(like caching) with use memo
  const renderTodoList = useMemo(() => {
    return todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
  }, [todoList, filteredStatus])

  return (
    <div>
      <h3>Todo List</h3>
      <h4>What to do?</h4>

      <TodoForm onSubmit={handleTodoFormSubmit} />

      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;