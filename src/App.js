import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import AlbumFeature from './features/Album';
import Notfound from './features/Album/components/Notfound';
import TodoFeature from './features/Todo';
import { Button } from '@material-ui/core';

function App() {
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
