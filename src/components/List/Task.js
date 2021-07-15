import React from "react";
import {
  Container,
  Segment,
  Grid,
  Image,
  ListHeader,
  ListDescription,
  Icon,
} from "semantic-ui-react";

export default function Task(props) {
  const { id, title, description, dispatch } = props;
  console.log(props)

  return (
    <Container attached>
          <Segment>
            <Grid columns={2} divided>
              <Grid.Column stretched width={4}>
                <Image
                  size="large"
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                />
              </Grid.Column>
              <Grid.Column>
                <ListHeader as="h1">{title}</ListHeader>
                <ListDescription>{description}
                <Icon
                  name="edit"
                  className="ml-3"
                  onClick={() => dispatch({ type: "EDIT_TASK", value: props })}
                />
                <Icon name="trash" className="ml-3" onClick={() => dispatch({ type: "DELETE_TASK", value: id })}/>
                </ListDescription>
              </Grid.Column>
            </Grid>
          </Segment>
    </Container>
  );
}