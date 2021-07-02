import "./App.css";
import React from "react";
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import awsConfig from "./aws-exports";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllTasks from "./components/AllTasks";
import Done from "./components/Done";
import { listTasks } from "./graphql/queries";
import "semantic-ui-css/semantic.min.css";
import MainHeader from "./components/MainHeader";
import NavBar from "./components/NavBar";
import TodoTasks from "./components/TodoTasks";
Amplify.configure(awsConfig);

function App() {
  return (
    <AmplifyAuthenticator>
      <div className="App">
        <MainHeader />
        <AmplifySignOut />
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={AllTasks} />
            <Route exact path="/todo" component={TodoTasks} />
            <Route exact path="/done" component={Done} />
          </Switch>
        </BrowserRouter>
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;
