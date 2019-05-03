import { Card, CardItem, Container, Icon } from "native-base";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from "react-native";
import React from "react";
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

const WishlistCardComp = props => {
  imageSource = require("./../../Resources/Images/3.jpg");
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => Actions.productDetail()}
    >
      <View style={styles.closeBtnContainer}>
        <Icon style={{ color: "#aaa" }} name="close" type="AntDesign" />
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imageSource} />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ color: "#BFAC88" }}>New Season</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={{ fontWeight: "bold", color: "#000" }}>PARIA</Text>
      </View>
      <View style={styles.textContainer}>
        <Text>$368</Text>
      </View>
    </TouchableOpacity>
  );
};

export default WishlistCardComp;

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
    borderBottomColor: "#eee"
  },
  image: {
    width: 150,
    height: 150
  },
  textContainer: {
    padding: 10
  },
  closeBtnContainer: {
    width: "100%",
    alignItems: "flex-end"
  }
});
