import React from "react";
import { Container, StyleProvider } from "native-base";
import getTheme from "../../native-base-theme/components";
import material from "../../native-base-theme/variables/material";
import FooterComp from "../components/ContentContainerComp/FooterComp";
import WishlistScreenContainer from "../components/ScreenContainers/WishlistScreenContainer";

const WishlistScreen = () => {
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <WishlistScreenContainer />
        <FooterComp activeTabNum={4} />
      </Container>
    </StyleProvider>
  );
};

export default WishlistScreen;
