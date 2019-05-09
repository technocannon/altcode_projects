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
import {
  StyleSheet,
  Picker,
  KeyboardAvoidingView,
  Platform,
  TextInput
} from "react-native";
import { Actions } from "react-native-router-flux";
class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      shopetype: "men",
      msg: ""
    };
  }
  login() {
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
        global.id = this.state.userDetil.id;
        global.token = this.state.userDetil.token;
        Actions.homeScreen();
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }

  checkMail(nav) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var flag = reg.test(this.state.email);
    if (flag) {
      if (this.state.email == "") alert("Password Field Is Empty");
      else {
        fetch(
          "http://estore.nfasoft.com/api/register.php?email=" +
            this.state.email +
            "&password=" +
            this.state.password +
            "&shoptype=" +
            this.state.shopetype
        )
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);
            this.setState({
              loading: false,
              userDetil: responseJson.response.model,
              msg: responseJson.response.message
            });

            if (this.state.userDetil != "") {
              this.login();
            } else {
              alert(this.state.msg);
            }
          })
          .catch(error => console.log(error)); //to catch the errors if any
      }
    }
  }

  render() {
    const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

    return (
      <Container>
        <Content contentContainerStyle={[styles.container, { flex: 1 }]}>
          <KeyboardAvoidingView>
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
                {/* <Label style={{ alignSelf: "flex-end" }}>*</Label> */}
                <Label style={styles.inputLabel}>Email Address</Label>

                <Input
                  onChangeText={text => {
                    this.setState({
                      email: text
                    });
                  }}
                  placeholder="                                                           *"
                  style={{ alignItems: "center" }}
                />
              </Item>
              <Item style={styles.item} floatingLabel>
                <Label style={styles.inputLabel}>Password</Label>
                <Input
                  onChangeText={text => {
                    this.setState({
                      password: text
                    });
                  }}
                  secureTextEntry={true}
                  password={true}
                  placeholder="                                                           *"
                />
              </Item>
              <Item style={[styles.item, { flexDirection: "row" }]}>
                <View style={{ flex: 1 }}>
                  <Label style={styles.inputLabel}>Shopping Type*</Label>
                </View>
                <View style={{ flex: 1 }}>
                  <Picker
                    selectedValue={this.state.shopetype}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ shopetype: itemValue })
                    }
                  >
                    <Picker.Item label="Men" value="man" />
                    <Picker.Item label="Women" value="women" />
                    <Picker.Item label="Kids" value="kids" />
                  </Picker>
                </View>
              </Item>
            </Form>
          </KeyboardAvoidingView>

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
              <Button
                block
                style={styles.loginBtn}
                onPress={() => this.checkMail()}
              >
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
    backgroundColor: "#00B0FE",
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
  },
  fbBtn: {
    elevation: 0,
    backgroundColor: "#3b5998",
    borderRadius: 5
  }
});

export default CreateAccount;
