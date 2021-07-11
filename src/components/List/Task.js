import API, { graphqlOperation } from "@aws-amplify/api";
import React, { useState, useEffect, useReducer } from "react";
import {
  Container,
  Segment,
  Grid,
  Image,
  ListHeader,
  ListDescription,
  Icon,
} from "semantic-ui-react";
import { listTasks } from "../../graphql/queries";

export default function Task(props) {
  const dispatch = useReducer();
  const { id } = props;
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
      {list.map((item) => {
        return (
          <Segment>
            <Grid columns={2} divided>
              <Grid.Column stretched width={4}>
                <Image
                  size="large"
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                />
              </Grid.Column>
              <Grid.Column>
                <ListHeader as="h1">{item.title}</ListHeader>
                <ListDescription>{item.description}
                <Icon name="trash" className="ml-3" onClick={() => dispatch({ type: "DELETE_TASK", value: id })}/>
                </ListDescription>
              </Grid.Column>
            </Grid>
          </Segment>
        );
      })}
    </Container>
  );
}