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
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container style={{ borderWidth: 0.1, borderColor: "#000" }}>
        <Content contentContainerStyle={[styles.container, { flex: 1 }]}>
          <Form>
            <Item style={styles.item} floatingLabel>
              <Label style={styles.inputLabel}>Email Address</Label>
              <Input />
            </Item>
            <Item style={styles.item} floatingLabel>
              <Label style={styles.inputLabel}>Password</Label>
              <Input />
            </Item>
          </Form>
          <View style={styles.loginBtnContainer}>
            <Button block style={styles.loginBtn}>
              <Text style={{ color: "#fff" }}>LOGIN</Text>
            </Button>
          </View>
        </Content>
        <Footer>
          <FooterTab style={styles.btnContainer}>
            <View>
              <Button style={styles.forgotBtn}>
                <Text>FORGOT PASSWORD?</Text>
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
    paddingTop: 20,
    backgroundColor: "rgba(255,255,255, 0.9)"
  },
  item: {
    marginLeft: 0
  },
  loginBtnContainer: {
    marginTop: 50
  },
  btnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loginBtn: {
    backgroundColor: "#22A7F0"
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

export default SignIn;
