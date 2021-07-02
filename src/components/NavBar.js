import React from "react";
import { useHistory } from "react-router";
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

const NavBar = () => {
  const [visible, setVisible] = React.useState(false);
  const history = useHistory();

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Checkbox
          checked={visible}
          label={{ children: <code>Menu Open</code> }}
          onChange={(e, data) => setVisible(data.checked)}
          className="mt-1"
        />
      </Grid.Column>

      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as="a">
              <Icon
                name="tasks"
                onClick={() => {
                  history.push("/");
                }}
              />
              AllTasks
            </Menu.Item>
            <Menu.Item as="a">
              <Icon
                name="pencil"
                onClick={() => {
                  history.push("/todo");
                }}
              />
              To do Tasks
            </Menu.Item>
            <Menu.Item as="a">
              <Icon
                name="sign language"
                onClick={() => {
                  history.push("/done");
                }}
              />
              Done
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as="h3">Application Content</Header>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};

export default NavBar;
