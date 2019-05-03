import React from "react";
import { Container, Content, View } from "native-base";
import ItemsCardComp from "./../Cards/ItemsCardComp";

const ItemsScreenContainer = () => {
  return (
    <Container>
      <Content>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <ItemsCardComp />
          <ItemsCardComp />
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <ItemsCardComp />
          <ItemsCardComp />
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <ItemsCardComp />
          <ItemsCardComp />
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <ItemsCardComp />
        </View>
      </Content>
    </Container>
  );
};

export default ItemsScreenContainer;
