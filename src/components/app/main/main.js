import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "utils/routes.js";

const Main = () => {
  console.log(routes);
  return (
    <main>
      <Switch>
        {routes.map(route => (
          <Route
            exact
            key={route.path}
            path={route.path}
            render={() => <route.component />}
          />
        ))}
      </Switch>
    </main>
  );
};

export default Main;
