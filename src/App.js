import "./App.css";
import React from "react";
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import awsConfig from "./aws-exports";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllTasks from "./components/AllTasks";
import Tasks from "./components/Tasks";
import Done from "./components/Done";
import { listTasks } from "./graphql/queries";
import "semantic-ui-css/semantic.min.css";
import MainHeader from "./components/MainHeader";
Amplify.configure(awsConfig);

function App() {
  return (
    <AmplifyAuthenticator>
      <div className="App">
        <MainHeader />
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
