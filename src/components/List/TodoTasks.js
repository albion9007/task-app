import API, { graphqlOperation } from "@aws-amplify/api";
import React, { useEffect, useState } from "react";
import {
  List,
  ListDescription,
  ListHeader,
  ListItem,
  Segment,
} from "semantic-ui-react";
import { listTasks } from "../../graphql/queries";

function TodoTasks({ title, description }) {
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
    <div>
      <Segment attached>
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
      </Segment>
    </div>
  );
}

export default TodoTasks;
