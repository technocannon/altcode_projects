import React, { Component } from "react";
import { Container, View, Text, Content, List, ListItem } from "native-base";
import RefineHeaderComp from "./../ContentContainerComp/RefineHeaderComp";
class Colors extends Component {
  state = {};
  render() {
    return (
      <Container>
        <RefineHeaderComp title="Colours" />
        <Content>
          <List>
            <ListItem itemDivider>
              <Text> </Text>
            </ListItem>
            <ListItem>
              <Text>Colors list</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default Colors;
