import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";

import {
  Button,
  Form,
  FormInput,
  FormTextArea,
  Modal,
  ModalActions,
  ModalContent,
  ModalHeader,
} from "semantic-ui-react";
import { createTask, updateTask } from "../../graphql/mutations";
import UploadImages from "../HandleImages/UploadImages";
import { useS3 } from "../../hooks/useS3";

const TaskModal = ({ state, dispatch }) => {
  const [uploadToS3] = useS3();
  const [fileToUpload, setFileToUpload] = useState();

  const saveTask = async () => {
    const imageKey = uploadToS3(fileToUpload);
    console.log("imageKey", imageKey);
    const timestamp = Math.floor(Date.now() / 1000);
    const type = "task";
    const { title, description } = state;
    const result = await API.graphql(
      graphqlOperation(createTask, {
        input: { title, description, type, timestamp, imageKey },
      })
    );
    dispatch({ type: "CLOSE_MODAL" });
    console.log("Save data with result: ", result);
  };

  const changeTask = async () => {
    const { id, title, description } = state;

    const result = await API.graphql(
      graphqlOperation(updateTask, { input: { id, title, description } })
    );
    dispatch({ type: "CLOSE_MODAL" });
    console.log("Edit data with result: ", result);
  };

  function getSelectedFile(fileName) {
    setFileToUpload(fileName);
  }

  return (
    <Modal open={state.isModalOpen} dimmer="blurring">
      <ModalHeader>
        {state.modalType === "add" ? "Create " : "Edit "}Your Task
      </ModalHeader>
      <ModalContent>
        <Form>
          <FormInput
            error={true ? false : { content: "Please add a name to your Task" }}
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
          <UploadImages getSelectedFile={getSelectedFile} />
        </Form>
      </ModalContent>
      <ModalActions>
        <Button negative onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
          Cancel
        </Button>
        <Button
          positive
          onClick={state.modalType === "add" ? saveTask : changeTask}
        >
          {state.modalType === "add" ? "Save " : "Update "}
        </Button>
      </ModalActions>
    </Modal>
  );
};

export default TaskModal;
