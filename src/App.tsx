import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import ProjectsPage from "./Pages/ProjectsPage";

function App() {
  return (
    <Switch>
      <Route exact path={"/"} component={HomePage} />
      <Route exact path={"/projects"} component={ProjectsPage} />
    </Switch>
  );
}

export default App;
