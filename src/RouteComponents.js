import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import Home from './component/Home';
import { ContentComponent } from './component/Content';
import App from './App';
import { routes } from './routes';
import { StaticHeaderSider } from './component/StaticHeaderSider';
import VisibleTodoList from "./container/VisibleTodoList";


class RouteComponents extends Component {
  render() {
    return (
      <Router>
        <StaticHeaderSider>
          <Switch>
            <Route path={`${routes.profile}/:id`} component={VisibleTodoList} />
            <Route path={routes.home} component={Home} exact />
            <Route path={routes.default} component={App} exact strict />
            <Route path={routes.content} component={() => <ContentComponent />} exact />
            <Redirect to={routes.default} from={routes.default} />
          </Switch>
        </StaticHeaderSider>
      </Router>
    );
  }
}

export default RouteComponents;
