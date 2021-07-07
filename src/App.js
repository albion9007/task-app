import "./App.css";
import React, { useReducer, useState } from "react";
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
  Form,
  FormInput,
  FormTextArea,
  Icon,
  Modal,
  ModalActions,
  ModalContent,
  ModalHeader,
} from "semantic-ui-react";
Amplify.configure(awsConfig);

const initialState = {
  id: "",
  title: "",
  description: "",
};

function App() {
  function taskReducer(state = initialState, action) {
    switch (action.type) {
      case "TITLE_CHANGED":
        return { ...state, title: action.value };
      case "DESCRIPTION_CHANGED":
        return { ...state, description: action.value };
      default:
        console.log("Default action for: ", action);
        return state;
    }
  }

  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [isModalOpen, setIsModalOpen] = useState(true);

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
        <ModalContent>
          <Form>
            <FormInput
              error={
                true ? false : { content: "Please add a name to your Task" }
              }
              label="Task Title"
              placeholder="To do Task"
              value={state.title}
              onChange={(e) =>
                dispatch({ type: "TITLE_CHANGED", value: e.target.value })
              }
            ></FormInput>
            <FormTextArea
              label="Task Description"
              placeholder="To do Task in detail"
              value={state.description}
              onChange={(e) =>
                dispatch({ type: "DESCRIPTION_CHANGED", value: e.target.value })
              }
            ></FormTextArea>
          </Form>
        </ModalContent>
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
