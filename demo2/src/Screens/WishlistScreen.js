import React from "react";
import { Container, StyleProvider } from "native-base";
import getTheme from "../../native-base-theme/components";
import material from "../../native-base-theme/variables/material";
import FooterComp from "../components/ContentContainerComp/FooterComp";
import WishlistScreenContainer from "../components/ScreenContainers/WishlistScreenContainer";
import EmptyWishlistScreenContainer from "../components/ScreenContainers/EmptyWishlistScreenContainer";
import HeaderComp from "./../components/ContentContainerComp/HeaderComp";
class WishlistScreen extends React.Component {
  state = {
    wishlist: true
  };

  render() {
    wishlistContainer = <WishlistScreenContainer />;
    EmptyWishlistContainer = <EmptyWishlistScreenContainer />;
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <HeaderComp title="Wishlist" />
          <EmptyWishlistScreenContainer />
          {/* {this.state.wishlist ? wishlistContainer : EmptyWishlistContainer} */}
          <FooterComp activeTabNum={4} />
        </Container>
      </StyleProvider>
    );
  }
}

export default WishlistScreen;
