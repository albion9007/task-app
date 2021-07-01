import "./App.css";
import React from "react";
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import awsConfig from "./aws-exports";

Amplify.configure(awsConfig);

function App() {
  return (
    <AmplifyAuthenticator>
      <div className="App">
        <h1>Welcome to Task App</h1>
        <AmplifySignOut />
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;
