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
  Container,
  Icon
} from "native-base";
import { Actions } from "react-native-router-flux";
import { StyleSheet, TextInput } from "react-native";
import { formatTestResults } from "@jest/test-result";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userDetil: ""
    };
  }

  checkMail() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const flag = reg.test(this.state.email);
    if (!flag) alert("Wrong Email");
    else if (this.state.password === "") alert("Password Field Is Empty");
    else {
      fetch(
        "http://estore.nfasoft.com/api/login.php?email=" +
          this.state.email +
          "&password=" +
          this.state.password
      )
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          this.setState({
            loading: false,
            userDetil: responseJson.response.model
          });

          if (this.state.userDetil == "") {
            alert("username or password may be incorect");
            global.id = 0;
          } else {
            global.id = this.state.userDetil.id;
            global.token = this.state.userDetil.token;

            Actions.homeScreen();
          }
        })
        .catch(error => console.log(error)); //to catch the errors if any
    }
  }

  handleEmailInput = text => {
    this.setState({
      email: text
    });
  };

  handlePswdInput = text => {
    this.setState({
      password: text
    });
  };
  render() {
    return (
      <Container style={{ borderWidth: 0.1, borderColor: "#000" }}>
        <Content contentContainerStyle={[styles.container, { flex: 1 }]}>
          <Form>
            <Button block style={styles.fbBtn}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Login with Facebook
              </Text>
              <Icon name="facebook" type="Entypo" style={{ color: "#fff" }} />
            </Button>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20
              }}
            >
              <Text note style={{ fontSize: 12 }}>
                or
              </Text>
            </View>
            <Item style={styles.item} floatingLabel>
              <Label style={styles.inputLabel}>Email Address</Label>
              <Input
                onChangeText={this.handleEmailInput}
                autoCapitalize="none"
              />
            </Item>
            <Item style={styles.item} floatingLabel>
              <Label style={styles.inputLabel}>Password</Label>
              <Input
                onChangeText={this.handlePswdInput}
                autoCapitalize="none"
                secureTextEntry={true}
                password={true}
              />
            </Item>
          </Form>
          <View style={styles.loginBtnContainer}>
            <Button
              block
              style={styles.loginBtn}
              onPress={() => this.checkMail()}
            >
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
    backgroundColor: "#00B0FE",
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
  },
  fbBtn: {
    elevation: 0,
    backgroundColor: "#3b5998",
    borderRadius: 5
  }
});

export default SignIn;
