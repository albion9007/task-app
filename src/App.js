import "./App.css";
import React from "react";
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import awsConfig from "./aws-exports";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllTasks from "./components/AllTasks";
import Tasks from "./components/Tasks";
import Done from "./components/Done";

Amplify.configure(awsConfig);

function App() {
  return (
    <AmplifyAuthenticator>
      <div className="App">
        <h1>Welcome to Task App</h1>
        <AmplifySignOut />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={AllTasks} />
            <Route exact path="/tasks" component={Tasks} />
            <Route exact path="/done" component={Done} />
          </Switch>
        </BrowserRouter>
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;
