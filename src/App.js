import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import AlbumFeature from './features/Album';
import Notfound from './features/Album/components/Notfound';
import TodoFeature from './features/Todo';
import { Button } from '@material-ui/core';
import { useEffect } from 'react';
import categoryApi from './api/categoryApi'

function App() {
  const params = {
    _limit: '5'
  }
  useEffect(() => {
    const fetchCategory = async () => {
      const categoryList = await categoryApi.getAll(params);
      console.log(categoryList);
    }

    fetchCategory();
  }, []);


  return (
    <div className="App">
      HomePage
      <p><NavLink to="/todos" activeClassName="active-menu">Todo</NavLink></p>
      <p><NavLink to="/albums" activeClassName="active-menu">Albums</NavLink></p>
      <Button color="primary">button</Button>

      <Switch>
        <Redirect from="/home" to="/" exact />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={Notfound} />
      </Switch>
    </div>
  );
}

export default App;
