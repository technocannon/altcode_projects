import React, { Component } from "react";
import { Container, View, Text, Content, List, ListItem } from "native-base";
import RefineHeaderComp from "./../ContentContainerComp/RefineHeaderComp";
class PriceRange extends Component {
  state = {};
  render() {
    return (
      <Container>
        <RefineHeaderComp title="Price Range" />
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

export default PriceRange;
