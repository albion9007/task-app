import React from "react";
import {
  Item,
  ItemHeader,
  ItemContent,
  ItemDescription,
  ItemExtra,
} from "semantic-ui-react";

function TodoTasks(props) {
  const { id, title, description, createdAt } = props;
  return (
    <div>
      <Item>
        <ItemContent>
          <ItemHeader>{title}</ItemHeader>
          <ItemDescription>{description}</ItemDescription>
          <ItemExtra>{new Date(createdAt).toDateString()}</ItemExtra>
        </ItemContent>
      </Item>
    </div>
  );
}

export default TodoTasks;
