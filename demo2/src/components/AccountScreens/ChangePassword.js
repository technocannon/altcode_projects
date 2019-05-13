import React, { Component } from "react";
import {
  Container,
  Content,
  View,
  Text,
  Form,
  Item,
  Label,
  Input,
  Footer,
  FooterTab,
  Button
} from "native-base";
import ItemsHeaderComp from "./../../components/ContentContainerComp/ItemsHeaderComp";
import { StyleSheet } from "react-native";
class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <ItemsHeaderComp title="Change Password" />
        <Content
          contentContainerStyle={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 0,
            paddingBottom: 10
          }}
        >
          <View>
            <Form>
              <Item style={styles.item} floatingLabel>
                <Label style={styles.inputLabel}>Current password</Label>
                <Input
                  secureTextEntry={true}
                  password={true}
                  placeholder="                                                                         *"
                  style={styles.input}
                />
              </Item>
              <Item style={styles.item} floatingLabel>
                <Label style={styles.inputLabel}>New password</Label>
                <Input
                  secureTextEntry={true}
                  password={true}
                  placeholder="                                                                         *"
                  style={styles.input}
                />
              </Item>
              <Item style={styles.item} floatingLabel>
                <Label style={styles.inputLabel}>Confirm new password</Label>
                <Input
                  secureTextEntry={true}
                  password={true}
                  placeholder="                                                                         *"
                  style={styles.input}
                />
              </Item>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputLabel}>
                  Your new password must be at least 6 characters long
                </Text>
              </View>
            </Form>
          </View>
        </Content>
        <Footer style={{ backgroundColor: "#fff" }}>
          <FooterTab style={{ backgroundColor: "#fff" }}>
            <View
              style={{
                width: "100%",
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5,
                paddingBottom: 5
              }}
            >
              <Button block style={{ backgroundColor: "#22A7F0" }}>
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  SAVE MY NEW PASSWORD
                </Text>
              </Button>
            </View>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    marginLeft: 0
  },
  inputLabel: {
    fontSize: 13
  },
  input: {}
});

export default ChangePassword;
