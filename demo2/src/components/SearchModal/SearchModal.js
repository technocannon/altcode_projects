import React, { Component } from "react";
import {
  Container,
  Content,
  View,
  Text,
  Button,
  Item,
  Icon,
  Input
} from "native-base";
import { TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import ItemsCardComp from "./../Cards/ItemsCardComp";

class SearchModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container style={{ backgroundColor: "#eee" }}>
        <View
          style={{
            width: "100%",
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10
          }}
        >
          <Item
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              paddingLeft: 10,
              borderBottomWidth: 0
            }}
          >
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
        </View>
        <Content contentContainerStyle={{ backgroundColor: "#eee" }}>
          <View
            style={{
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 10,
              flex: 9
            }}
          >
            <View>
              <View style={{ flexDirection: "row", width: "100%" }}>
                <ItemsCardComp
                  key={1}
                  product_id={1}
                  imageSource={{
                    uri: "http://estore.nfasoft.com/images/product1.png"
                  }}
                  storeType="New Season"
                  productName={"Product"}
                  description={"This is a new product"}
                  price={"1000"}
                />
                <ItemsCardComp
                  key={1}
                  product_id={1}
                  imageSource={{
                    uri: "http://estore.nfasoft.com/images/product1.png"
                  }}
                  storeType="New Season"
                  productName={"Product"}
                  description={"This is a new product"}
                  price={"1000"}
                />
              </View>
              <View style={{ flexDirection: "row", width: "100%" }}>
                <ItemsCardComp
                  key={1}
                  product_id={1}
                  imageSource={{
                    uri: "http://estore.nfasoft.com/images/product1.png"
                  }}
                  storeType="New Season"
                  productName={"Product"}
                  description={"This is a new product"}
                  price={"1000"}
                />
                <ItemsCardComp
                  key={1}
                  product_id={1}
                  imageSource={{
                    uri: "http://estore.nfasoft.com/images/product1.png"
                  }}
                  storeType="New Season"
                  productName={"Product"}
                  description={"This is a new product"}
                  price={"1000"}
                />
              </View>
              <View style={{ flexDirection: "row", width: "100%" }}>
                <ItemsCardComp
                  key={1}
                  product_id={1}
                  imageSource={{
                    uri: "http://estore.nfasoft.com/images/product1.png"
                  }}
                  storeType="New Season"
                  productName={"Product"}
                  description={"This is a new product"}
                  price={"1000"}
                />
                <ItemsCardComp
                  key={1}
                  product_id={1}
                  imageSource={{
                    uri: "http://estore.nfasoft.com/images/product1.png"
                  }}
                  storeType="New Season"
                  productName={"Product"}
                  description={"This is a new product"}
                  price={"1000"}
                />
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default SearchModal;
