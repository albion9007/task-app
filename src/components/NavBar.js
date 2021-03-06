import React from "react";
import { useHistory } from "react-router";
import {
  Checkbox,
  Grid,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import TodoTasks from "./List/TodoTasks";

export default function NavBar({tasks, dispatch}) {
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
              <Segment placeholder>
                <TodoTasks tasks={tasks} dispatch={dispatch}/>
              </Segment>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};