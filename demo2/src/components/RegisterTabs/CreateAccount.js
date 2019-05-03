import React, { Component } from "react";
import {
  View,
  Tabs,
  Tab,
  Form,
  Item,
  Input,
  Button,
  Text,
  Label,
  Footer,
  FooterTab,
  Content,
  Container
} from "native-base";
import { StyleSheet } from "react-native";
class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Content contentContainerStyle={[styles.container, { flex: 1 }]}>
          <View style={styles.requiredTextContainer}>
            <View>
              <Text style={{ fontSize: 12 }}>required fields*</Text>
            </View>
          </View>
          <Form>
            <Item style={styles.item} floatingLabel>
              <Label style={styles.inputLabel}>Full Name</Label>
              <Input />
            </Item>
            <Item style={styles.item} floatingLabel>
              <Label style={styles.inputLabel}>Email Address</Label>
              <Input />
            </Item>
            <Item style={styles.item} floatingLabel>
              <Label style={styles.inputLabel}>Password</Label>
              <Input />
            </Item>
          </Form>
          <View style={{ marginTop: 25 }}>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                By registering you are agree with our terms & Conditions, and
                Privacy Policy.
              </Text>
            </View>
          </View>
        </Content>
        <Footer>
          <FooterTab style={styles.btnContainer}>
            <View style={styles.loginBtnContainer}>
              <Button block style={styles.loginBtn}>
                <Text style={{ color: "#fff" }}>CREATE ACCOUNT</Text>
              </Button>
            </View>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    backgroundColor: "rgba(255,255,255, 0.9)"
  },
  item: {
    marginLeft: 0
  },
  loginBtnContainer: {
    marginTop: 0,
    width: "100%"
  },
  btnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  },
  loginBtn: {
    backgroundColor: "#22A7F0",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0
  },
  requiredTextContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  forgotBtn: {
    borderWidth: 1,
    borderColor: "#eee",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0
  },
  inputLabel: {
    fontSize: 13
  }
});

export default CreateAccount;
