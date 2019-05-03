import React from "react";
import { Container, StyleProvider } from "native-base";
import getTheme from "../../native-base-theme/components";
import material from "../../native-base-theme/variables/material";
import FooterComp from "../components/ContentContainerComp/FooterComp";
import ItemsScreenContainer from "../components/ScreenContainers/ItemsScreenContainer";
import HeaderComp from "./../components/ContentContainerComp/HeaderComp";
const ItemsScreen = () => {
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <ItemsScreenContainer />
        <FooterComp activeTabNum={2} />
      </Container>
    </StyleProvider>
  );
};

export default ItemsScreen;
