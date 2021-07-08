import React from "react";
import { Header, HeaderContent, Icon } from "semantic-ui-react";

export default function MainHeader() {
  return (
    <div>
      <Header as="h1" className="mt-1 mb-3 header">
        <Icon name="pencil alternate" />
        <HeaderContent>Let's do your Task!</HeaderContent>
        <Icon name="sign language" />
      </Header>
    </div>
  );
}