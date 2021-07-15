import "./App.css";
import React, { useEffect, useReducer } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
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
} from "semantic-ui-react";
import { deleteTask } from "./graphql/mutations";
import { onCreateTask, onDeleteTask } from "./graphql/subscriptions";
import { listTasks } from "./graphql/queries";
import TaskModal from "./components/modal/TaskModal";
Amplify.configure(awsConfig);

const initialState = {
  id: "",
  title: "",
  description: "",
  tasks: [],
  isModalOpen: false,
};

const taskReducer = (state = initialState, action) => {
  let newTask;
  switch (action.type) {
    case "TITLE_CHANGED":
      return { ...state, title: action.value };
    case "DESCRIPTION_CHANGED":
      return { ...state, description: action.value };
    case "UPDATE_TASK":
      return { ...state, tasks: [...action.value, ...state.tasks] };
    case "DELETE_TASK":
      console.log(action.value);
      deleteTaskById(action.value)
      return { ...state };
    // case "DELETE_TASK_RESULT":
    //   newTask = state.lists.filter((item) => item.id !== action.value);
    //   return { ...state, tasks: newTask };
    case "EDIT_TASK": {
      const newValue = { ...action.value };
      delete newValue.children;
      delete newValue.listItems;
      delete newValue.dispatch;
      console.log(newValue);
      return {
        ...state,
        isModalOpen: true,
        modalType: "edit",
        id: newValue.id,
        title: newValue.title,
        description: newValue.description,
      };
    }
    case "OPEN_MODAL":
      return { ...state, isModalOpen: true, modalType: "add" };
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
        title: "",
        description: "",
        id: "",
      };
    default:
      console.log("Default action for: ", action);
      return state;
  }
}

async function deleteTaskById(id) {
  const result = await API.graphql(
    graphqlOperation(deleteTask, { input: { id } })
  );
  console.log("deleted", result);
}

const App = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const fetchTask = async () => {
    const { data } = await API.graphql(graphqlOperation(listTasks));
    dispatch({ type: "UPDATE_TASK", value: data.listTasks.items });
  }

  useEffect(() => {
    fetchTask();
  }, []);

  useEffect(() => {
    const createTaskSub = API.graphql(graphqlOperation(onCreateTask)).subscribe(
      {
        next: ({ _, value }) => {
          console.log("onCreateTask called");
          dispatch({
            type: "UPDATE_TASK",
            value: [value.data.onCreateTask],
          });
        },
      }
    );
    // const deleteTaskSub = API.graphql(graphqlOperation(onDeleteTask)).subscribe(
    //   {
    //     next: ({ _, value }) => {
    //       console.log("onDeleteTask called");
    //       dispatch({
    //         type: "DELETE_TASK_RESULT",
    //         value: value.data.onDeleteTask.id,
    //       });
    //     },
    //   }
    // );
    return () => {
      createTaskSub.unsubscribe();
      // deleteTaskSub.unsubscribe();
    };
  }, []);

  return (
    <AmplifyAuthenticator>
      <Container style={{ height: "100vh" }}>
        <AmplifySignOut />
        <Button className="floatingButton" onClick={() => dispatch({ type: "OPEN_MODAL" })}>
          <Icon name="plus" className="floatingButton_icon" />
        </Button>
        <div className="App">
          <MainHeader />
          <BrowserRouter>
            <NavBar tasks={state.tasks} dispatch={dispatch}/>
            <Switch>
              <Route exact path="/" />
              <Route exact path="/todo" />
              <Route exact path="/done" />
            </Switch>
          </BrowserRouter>
        </div>
      </Container>
      <TaskModal state={state} dispatch={dispatch}/>
    </AmplifyAuthenticator>
  );
}

export default App;