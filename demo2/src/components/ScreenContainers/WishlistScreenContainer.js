import React from "react";
import { Container, Content, View } from "native-base";
import WishlistCardComp from "./../Cards/WishlistCardComp";

const DesignerScreenContainer = () => {
  return (
    <Container>
      <Content>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <WishlistCardComp />
          <WishlistCardComp />
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <WishlistCardComp />
          <WishlistCardComp />
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <WishlistCardComp />
          <WishlistCardComp />
        </View>
      </Content>
    </Container>
  );
};

export default DesignerScreenContainer;
