import React, { Component } from "react";
import { Container, Content, View, Text } from "native-base";
import ItemsHeaderComp from "./../ContentContainerComp/ItemsHeaderComp";
class PrivacyPolicy extends Component {
  state = {};
  render() {
    return (
      <Container>
        <ItemsHeaderComp title="About Farfetch" />
        <Content>
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "600", fontSize: 18 }}>
              Privacy Policy
            </Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 14, color: "#222" }}>
              This is privacy policy
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default PrivacyPolicy;
