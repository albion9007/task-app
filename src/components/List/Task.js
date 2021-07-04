import API, { graphqlOperation } from "@aws-amplify/api";
import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListHeader,
  ListDescription,
  Container,
} from "semantic-ui-react";
import { listTasks } from "../../graphql/queries";

function Task(props) {
  const [list, setList] = useState([]);

  async function fetchList() {
    const { data } = await API.graphql(graphqlOperation(listTasks));
    setList(data.listTasks.items);
    console.log(data);
  }
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <Container attached>
      <List>
        {list.map((item) => {
          return (
            <ListItem>
              <ListHeader>{item.title}</ListHeader>
              <ListDescription>{item.description}</ListDescription>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}

export default Task;
