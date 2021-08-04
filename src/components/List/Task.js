import { Storage } from "aws-amplify";
import React, { useEffect, useState } from "react";
import {
  Container,
  Segment,
  Grid,
  Image,
  ListHeader,
  ListDescription,
  Icon,
  Dimmer,
  Loader,
} from "semantic-ui-react";

export default function Task(props) {
  const { id, title, description, imageKey, dispatch } = props;
  const [imageUrl, setImageUrl] = useState(
    "https://react.semantic-ui.com/images/wireframe/image.png"
  );

  const [isLoading, setIsLoading] = useState(true);

  const fetchImageUrl = async () => {
    const imageUrl = await Storage.get(imageKey);
    setImageUrl(imageUrl);
  };

  useEffect(() => {
    if (imageKey) {
      fetchImageUrl();
    }
  }, []);

  const content = <Loader />;

  return (
    <Container attached>
      <Segment>
        <Grid columns={2} divided>
          <Grid.Column stretched width={4}>
            <Dimmer.Dimmable
              dimmed={isLoading}
              dimmer={{ active: isLoading, content }}
              as={Image}
              size="large"
              src={imageUrl}
            ></Dimmer.Dimmable>
          </Grid.Column>
          <Grid.Column>
            <ListHeader as="h1">{title}</ListHeader>
            <ListDescription>
              {description}
              <Icon
                name="edit"
                className="ml-3"
                onClick={() => dispatch({ type: "EDIT_TASK", value: props })}
              />
              <Icon
                name="trash"
                className="ml-3"
                onClick={() => dispatch({ type: "DELETE_TASK", value: id })}
              />
            </ListDescription>
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  );
}
