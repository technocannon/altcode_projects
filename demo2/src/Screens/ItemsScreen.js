import React from "react";
import { Container, StyleProvider } from "native-base";
import getTheme from "../../native-base-theme/components";
import material from "../../native-base-theme/variables/material";
import FooterComp from "../components/ContentContainerComp/FooterComp";
import ItemsScreenContainer from "../components/ScreenContainers/ItemsScreenContainer";
import ItemsHeaderComp from "./../components/ContentContainerComp/ItemsHeaderComp";
const ItemsScreen = props => {
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <ItemsHeaderComp title={props.title} />
        <ItemsScreenContainer />
        <FooterComp activeTabNum={props.activeTab} />
      </Container>
    </StyleProvider>
  );
};

export default ItemsScreen;
