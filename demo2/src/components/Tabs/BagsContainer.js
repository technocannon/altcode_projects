import React, { Component } from "react";
import { View } from "native-base";
import MiniCardComp from "../Cards/MiniCardComp";

export default class BagsContainer extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        <MiniCardComp
          imgSource={this.props.imgLink}
          catagoryName={"Bags"}
          cardHeight={115}
          cardWidth={115}
          Margin={10}
        />
        <MiniCardComp
          imgSource={this.props.imgLink}
          catagoryName={"Bags"}
          cardHeight={115}
          cardWidth={115}
          Margin={10}
        />

        <MiniCardComp
          imgSource={this.props.imgLink}
          catagoryName={"Bags"}
          cardHeight={115}
          cardWidth={115}
          Margin={10}
        />

        <MiniCardComp
          imgSource={this.props.imgLink}
          catagoryName={"Bags"}
          cardHeight={115}
          cardWidth={115}
          Margin={10}
        />
        <MiniCardComp
          imgSource={this.props.imgLink}
          catagoryName={"Bags"}
          cardHeight={115}
          cardWidth={115}
          Margin={10}
        />

        <MiniCardComp
          imgSource={this.props.imgLink}
          catagoryName={"Bags"}
          cardHeight={115}
          cardWidth={115}
          Margin={10}
        />
      </View>
    );
  }
}
