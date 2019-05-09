import React, { Component } from "react";
import { Container, View, Text, Content, List, ListItem } from "native-base";
import RefineHeaderComp from "./../ContentContainerComp/RefineHeaderComp";
class Sizes extends Component {
  state = {};
  render() {
    return (
      <Container>
        <RefineHeaderComp title="Sizes" />
        <Content>
          <List>
            <ListItem itemDivider>
              <Text> </Text>
            </ListItem>
            <ListItem>
              <Text>Sizes list</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default Sizes;
