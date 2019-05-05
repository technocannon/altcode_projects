import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ImageSlider from "react-native-image-slider";
import {
  Button,
  Content,
  Accordion,
  Container,
  Icon,
  Footer,
  FooterTab,
  List,
  ListItem
} from "native-base";
import Modal from "react-native-modal";
import { stringLiteralTypeAnnotation } from "@babel/types";
import { StyleSheet } from "react-native";
const dataArray = [
  { title: "Description", content: "Lorem ipsum dolor sit amet" },
  { title: "Size & Fit", content: "Lorem ipsum dolor sit amet" },
  { title: "Composition & Care", content: "Lorem ipsum dolor sit amet" },
  { title: "Shipping & Free Return", content: "Lorem ipsum dolor sit amet" },
  { title: "Designer - Emporio Armani", content: "Lorem ipsum dolor sit amet" }
];

export default class ProductDetail extends React.Component {
  state = {
    isModalVisible: false,
    size: "Select Size",
    fav: false
  };

  _sizeHandler = s => {
    // this.setState({
    //   size: s
    // });
    alert("hellllp");
  };
  _toggleModal = () => {
    alert("dhd");
    //this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    return (
      <Container>
        <View>
          <View style={styles.closeBtnContainer}>
            <View>
              <Button
                style={styles.favBtn}
                onPress={() => {
                  this.setState({
                    fav: !this.state.fav
                  });
                }}
              >
                <Icon
                  style={{ color: this.state.fav ? "#000" : "#aaa" }}
                  name="star"
                  type="Entypo"
                />
              </Button>
            </View>
          </View>
        </View>
        <View style={{ height: "50%" }}>
          <ImageSlider
            autoPlayWithInterval={3000}
            images={[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHhCZdybnd3gOKxYAkd-Me6YIOD81kXYTbyg40YdmBFph25d9",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHhCZdybnd3gOKxYAkd-Me6YIOD81kXYTbyg40YdmBFph25d9",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHhCZdybnd3gOKxYAkd-Me6YIOD81kXYTbyg40YdmBFph25d9"
            ]}
            style={{ backgroundColor: "#fff" }}
          />
        </View>

        <Content>
          <View style={{ padding: 10 }}>
            <View>
              <Text style={{ color: "#BFAC88" }}>New Season</Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#000" }}>
                EMPORIO ARMANI
              </Text>

              <Text>$500</Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text>logo printed bomber shirt</Text>
            </View>
          </View>
          <View>
            <Button
              style={{
                backgroundColor: "white",
                alignSelf: "center",
                marginTop: 25,
                marginBottom: 20,
                padding: 20,
                elevation: 0,
                borderWidth: 0.3,
                borderColor: "#000"
              }}
              onPress={() => {
                this.setState({ isModalVisible: !this.state.isModalVisible });
              }}
            >
              <Text style={{ color: "black" }}>{this.state.size}</Text>
            </Button>
          </View>

          <Accordion
            dataArray={dataArray}
            icon="add"
            expandedIcon="remove"
            iconStyle={{ color: "green" }}
            expandedIconStyle={{ color: "red" }}
            headerStyle={{ backgroundColor: "white" }}
            contentStyle={{ backgroundColor: "white" }}
          />

          <Text style={{ marginLeft: 14, textAlign: "center" }}>
            Contact US & Order By Phone
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Button
              style={{
                flex: 1,
                backgroundColor: "white",
                justifyContent: "center"
              }}
            >
              <Icon
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  color: "black"
                }}
                name="md-call"
              />
            </Button>
            <Button
              style={{
                flex: 1,
                backgroundColor: "white",
                justifyContent: "center"
              }}
            >
              <Icon
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  color: "black"
                }}
                name="md-chatboxes"
              />
            </Button>
          </View>
          <View style={{ paddingTop: this.state.isModalVisible ? 100 : 0 }}>
            <Modal
              isVisible={this.state.isModalVisible}
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                marginTop: "50%"
              }}
              onBackButtonPress={() => {
                this.setState({ isModalVisible: !this.state.isModalVisible });
              }}
            >
              <View
                style={{
                  flex: 1,
                  padding: 20,
                  paddingTop: 30
                }}
              >
                <View>
                  <Text>
                    Some sizes are only available at alternative Farfetch
                    partners, with a different price
                  </Text>
                </View>
                <View>
                  <List>
                    <ListItem>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({
                            size: "XXS",
                            isModalVisible: !this.state.isModalVisible
                          });
                        }}
                        style={{ flex: 1 }}
                      >
                        <View style={{ width: "100%" }}>
                          <Text>XXS</Text>
                        </View>
                      </TouchableOpacity>
                    </ListItem>

                    <ListItem>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({
                            size: "XL",
                            isModalVisible: !this.state.isModalVisible
                          });
                        }}
                        style={{ flex: 1 }}
                      >
                        <View style={{ width: "100%" }}>
                          <Text>XL</Text>
                        </View>
                      </TouchableOpacity>
                    </ListItem>
                    <ListItem>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({
                            size: "L",
                            isModalVisible: !this.state.isModalVisible
                          });
                        }}
                        style={{ flex: 1 }}
                      >
                        <View style={{ width: "100%" }}>
                          <Text>L</Text>
                        </View>
                      </TouchableOpacity>
                    </ListItem>
                    <ListItem>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({
                            size: "M",
                            isModalVisible: !this.state.isModalVisible
                          });
                        }}
                        style={{ flex: 1 }}
                      >
                        <View style={{ width: "100%" }}>
                          <Text>M</Text>
                        </View>
                      </TouchableOpacity>
                    </ListItem>
                    <ListItem>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({
                            size: "S",
                            isModalVisible: !this.state.isModalVisible
                          });
                        }}
                        style={{ flex: 1 }}
                      >
                        <View style={{ width: "100%" }}>
                          <Text>S</Text>
                        </View>
                      </TouchableOpacity>
                    </ListItem>
                  </List>
                </View>
              </View>
            </Modal>
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
                  ADD TO BAG
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
  closeBtnContainer: {
    width: "100%",
    alignItems: "flex-end"
  },
  favBtn: {
    backgroundColor: "transparent",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0
  }
});
