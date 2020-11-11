import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Notfound from '../Album/components/Notfound';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';


function TodoFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} />

        <Route component={Notfound} />
      </Switch>
    </div>
  );
}

export default TodoFeature;