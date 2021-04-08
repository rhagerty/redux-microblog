import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import App from "./App";
import NewPostForm from "./NewPostForm";
import Post from "./Post"

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/new" exact>
        <NewPostForm />
      </Route>
      <Route path="/:id" exact>
        <Post />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
