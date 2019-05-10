import React, { Component } from "react";
import {
  Container,
  Content,
  View,
  Text,
  Icon,
  Footer,
  FooterTab,
  Button
} from "native-base";
import ShoppingCard from "./../components/Cards/ShoppingCard";
import { StyleSheet } from "react-native";
class BagScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Content style={{ backgroundColor: "#eee" }}>
          <View style={{ paddingLeft: 10, paddingRight: 10 }}>
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
          </View>
          <View style={{ backgroundColor: "#fff", padding: 10 }}>
            <View>
              <Text style={styles.heading}>Free return service</Text>
              <Text style={styles.text}>
                Return your item for free with our return collection service
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.heading}>Need help?</Text>
              <Text style={styles.text}>
                If you would like to speak to one of our customer service
                representatives you can reach us here:
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderTopWidth: 1,
                borderTopColor: "#eee",
                marginTop: 10
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRightColor: "#eee",
                  borderRightWidth: 1,
                  padding: 10
                }}
              >
                <Icon name="phone" type="FontAwesome" />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10
                }}
              >
                <Icon name="email" type="MaterialIcons" />
              </View>
            </View>
          </View>
        </Content>
        <Footer style={{ backgroundColor: "#fff", height: 120 }}>
          <FooterTab
            style={{
              backgroundColor: "#fff",
              height: 120,
              flexDirection: "column"
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                flex: 1,
                padding: 10
              }}
            >
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.text}>Subtotal </Text>
                  <Text style={[styles.text, { fontWeight: "bold" }]}>
                    $1000
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.text}>Shipping </Text>
                  <Text style={[styles.text, { fontWeight: "bold" }]}>$0</Text>
                </View>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={[styles.text, { fontWeight: "bold" }]}>
                    Total USD{" "}
                  </Text>
                  <Text style={[styles.text, { fontWeight: "bold" }]}>
                    $1000
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.text}>(Imported duties included)</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 1,
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
  text: {
    fontSize: 13
  },
  heading: {
    fontSize: 13,
    fontWeight: "600"
  }
});

export default BagScreen;
