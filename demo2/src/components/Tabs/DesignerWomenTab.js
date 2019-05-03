import React from "react";
import { View, Text } from "native-base";
import MiniCardComp from "../Cards/MiniCardComp";
import SwiperCardComp from "./SwiperCardsComp";
import { StyleSheet } from "react-native";

const DesignerWomenTab = () => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          {" "}
          Popular Designers
        </Text>
      </View>
      <SwiperCardComp />

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold"
          }}
        >
          {" "}
          Popular Desingers
        </Text>

        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <View style={styles.compContainer}>
              <MiniCardComp
                imgSource={this.props.imgLink}
                catagoryName={"T-Shirts"}
              />
            </View>
            <View style={styles.compContainer}>
              <MiniCardComp
                imgSource={this.props.imgLink}
                catagoryName={"T-Shirts"}
              />
            </View>
            <View style={styles.compContainer}>
              <MiniCardComp
                imgSource={this.props.imgLink}
                catagoryName={"T-Shirts"}
              />
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.compContainer}>
              <MiniCardComp
                imgSource={this.props.imgLink}
                catagoryName={"T-Shirts"}
              />
            </View>
            <View style={styles.compContainer}>
              <MiniCardComp
                imgSource={this.props.imgLink}
                catagoryName={"T-Shirts"}
              />
            </View>
            <View style={styles.compContainer}>
              <MiniCardComp
                imgSource={this.props.imgLink}
                catagoryName={"T-Shirts"}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
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

export default DesignerWomenTab;
