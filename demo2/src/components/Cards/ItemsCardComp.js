import { Card, CardItem, Container, Icon, Button } from "native-base";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
/*Component builds a card and
requires following props
---------------------------
* imgSource
* itemName
* designerName
* price
--------------------------
cardHeight
cardWidth
leftMargin
* */

class ItemCardComp extends Component {
  state = {
    fav: false
  };

  render() {
    imageSource = require("./../../Resources/Images/3.jpg");
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => Actions.productDetail()}
      >
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
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imageSource} />
        </View>
        <View style={styles.textContainer}>
          <Text style={{ color: "#BFAC88" }}>{this.props.storeType}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={{ fontWeight: "bold", color: "#000" }}>
            {this.props.productName}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={{ textAlign: "center" }}>{this.props.description}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>${this.props.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ItemCardComp;

// styling of the card
const styles = StyleSheet.create({
  cardContainer: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderRightColor: "#eee",
    borderBottomColor: "#eee",
    backgroundColor: "#fff"
  },
  image: {
    width: 150,
    height: 150
  },
  textContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
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
