import "./App.css";
import React, { useState } from "react";
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import awsConfig from "./aws-exports";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import MainHeader from "./components/MainHeader";
import NavBar from "./components/NavBar";
import {
  Button,
  Container,
  Icon,
  Modal,
  ModalActions,
  ModalContent,
  ModalHeader,
} from "semantic-ui-react";
Amplify.configure(awsConfig);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal(shouldOpen) {
    setIsModalOpen(shouldOpen);
  }

  return (
    <AmplifyAuthenticator>
      <Container style={{ height: "100vh" }}>
        <AmplifySignOut />
        <Button className="floatingButton" onClick={() => toggleModal(true)}>
          <Icon name="plus" className="floatingButton_icon" />
        </Button>
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
      <Modal open={isModalOpen} dimmer="blurring">
        <ModalHeader>Creat Task</ModalHeader>
        <ModalContent>Form add</ModalContent>
        <ModalActions>
          <Button negative onClick={() => toggleModal(false)}>
            Cancel
          </Button>
          <Button positive onClick={() => toggleModal(false)}>
            Save
          </Button>
        </ModalActions>
      </Modal>
    </AmplifyAuthenticator>
  );
}

export default App;
