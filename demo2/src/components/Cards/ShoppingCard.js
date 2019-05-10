import React, { Component } from "react";
import { View, Text, Icon, Button, Picker, Form } from "native-base";
import { StyleSheet, Image } from "react-native";
class ShoppingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }

  render() {
    return (
      <View style={{ backgroundColor: "#fff", padding: 20, marginTop: 10 }}>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#eee",
            borderBottomWidth: 1,
            paddingBottom: 10
          }}
        >
          <View>
            <View style={{ flexDirection: "row", flex: 3 }}>
              <Text style={styles.text}>Shipping </Text>
              <Text style={styles.text}> item </Text>
              <Text style={styles.text}>from </Text>
              <Text style={styles.text}>Romania</Text>
            </View>
            <View>
              <Text style={styles.text}>Import duties are included</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              flex: 2
            }}
          >
            <Text style={styles.text}>Estimated </Text>
            <Text style={[styles.text, { fontWeight: "bold" }]}>$0</Text>
          </View>
        </View>
        <View
          style={{ flexDirection: "row", paddingTop: 10, paddingBottom: 10 }}
        >
          <View style={{ flex: 2 }}>
            <Image
              source={require("./../../Resources/Images/9.jpg")}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <View style={{ flex: 5 }}>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={{ fontWeight: "bold" }}>THOM BROWNE EYEWEAR</Text>
              </View>
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start"
                }}
              >
                <View>
                  <Button transparent small>
                    <Icon
                      name="close"
                      style={{ fontSize: 18, color: "#222" }}
                    />
                  </Button>
                </View>
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text}>Item ID: </Text>
              <Text style={styles.text}>123</Text>
            </View>
            <View style={{ flexDirection: "row", flex: 1, marginTop: 10 }}>
              <Form style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 0 }}>
                  <Button
                    transparent
                    small
                    style={{
                      borderWidth: 1,
                      borderColor: "#eee"
                    }}
                  >
                    <Text style={{ color: "#000" }}>QTY</Text>
                    <Icon
                      name="chevron-down"
                      type="Feather"
                      style={{ color: "#000" }}
                    />
                  </Button>
                </View>
                <View style={{ flex: 1, padding: 0 }}>
                  <Button
                    transparent
                    small
                    style={{
                      borderWidth: 1,
                      borderColor: "#eee"
                    }}
                  >
                    <Text style={{ color: "#000" }}>SIZE</Text>
                    <Icon
                      name="chevron-down"
                      type="Feather"
                      style={{ color: "#000" }}
                    />
                  </Button>
                </View>
              </Form>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Icon name="star" style={{ fontSize: 18 }} />
            <Text style={styles.text}>Move to wishlist</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "flex-end"
            }}
          >
            <View>
              <Text style={styles.text}>$604</Text>
            </View>
            <View
              style={{
                width: "100%",
                justifyContent: "flex-end",
                alignItems: "flex-end"
              }}
            >
              <Text style={[styles.text]}>(Imported duties included)</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12
  }
});

export default ShoppingCard;
