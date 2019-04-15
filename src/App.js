import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import AddTodo from './component/AddTodo';
import { routes } from './routes';
import { StaticHeader } from './component/StaticHeader';
import VisibleTodoList from "./container/VisibleTodoList";


class App extends Component {
  render() {
    return (
      <Router>
        <StaticHeader>
          <Switch>
            <Route path={routes.addTodo} component={AddTodo} />
            <Route path={routes.home} component={VisibleTodoList} exact />
            <Route path={routes.default} component={App} exact strict />
            <Redirect to={routes.default} from={routes.default} />
          </Switch>
        </StaticHeader>
      </Router>
    );
  }
}

export default App;
