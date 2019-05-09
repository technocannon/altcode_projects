import React, { Component } from "react";
import { Container, View, Text, Content, List, ListItem } from "native-base";
import RefineHeaderComp from "./../ContentContainerComp/RefineHeaderComp";
class Designers extends Component {
  state = {};
  render() {
    return (
      <Container>
        <RefineHeaderComp title="Designers" />
        <Content>
          <List>
            <ListItem itemDivider>
              <Text> </Text>
            </ListItem>
            <ListItem>
              <Text>Designers list</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default Designers;
