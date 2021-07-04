import "./App.css";
import React from "react";
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import awsConfig from "./aws-exports";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import MainHeader from "./components/MainHeader";
import NavBar from "./components/NavBar";
import { Container } from "semantic-ui-react";
Amplify.configure(awsConfig);

function App() {
  return (
    <AmplifyAuthenticator>
      <AmplifySignOut />

      <Container>
        <div className="App">
          <MainHeader />
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path="/" />
              <Route exact path="/todo" />
              <Route exact path="/done" />
            </Switch>
          </BrowserRouter>
        </div>
      </Container>
    </AmplifyAuthenticator>
  );
}

export default App;
