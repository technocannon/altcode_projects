import React, { Component } from "react";
import { View } from "native-base";
import MiniCardComp from "../Cards/MiniCardComp";
import { StyleSheet } from "react-native";
export default class ShoesContainer extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"Flats"}
            />
          </View>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"Heels"}
            />
          </View>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"Sneakers"}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"Wedges"}
            />
          </View>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"Boots"}
            />
          </View>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"Shoes"}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    flexWrap: "wrap"
  },
  container: {
    flex: 1,
    flexDirection: "row"
  },
  compContainer: {
    flex: 1,
    padding: 5
  }
});
