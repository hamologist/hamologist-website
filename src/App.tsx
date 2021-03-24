import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import ProjectsPage from "./Pages/ProjectsPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <Switch>
      <Route exact path={"/"} component={HomePage} />
      <Route exact path={"/projects"} component={ProjectsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
