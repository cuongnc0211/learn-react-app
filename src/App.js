import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      HomePage
      <p><NavLink to="/todos" activeClassName="active-menu">Todo</NavLink></p>
      <p><NavLink to="/albums" activeClassName="active-menu">Albums</NavLink></p>

      <Switch>
        <Redirect from="/home" to="/" exact />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} exact />
        <Route path="/albums" component={AlbumFeature} exact />
      </Switch>
    </div>
  );
}

export default App;
