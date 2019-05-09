import React from "react";
import { Button, Footer, FooterTab, Icon, Text } from "native-base";
import { Actions } from "react-native-router-flux";
/*
 * receives props
 * ----------------
 * activeTabNum
 * */

export default class FooterComp extends React.Component {
  /*  state = {
        activeTabHome: null,
        activeTabShop: null,
        activeTabDesinger: null,
        activeTabWishlist: null,
        activeTabProfile: null,

    };

    activeTabHandler = () => {
        if (this.props.activeTabNum === 1) {
            return this.setState({
                activeTabHome: 'active'
            })
        } else if (this.props.activeTabNum === 2) {
            activeTabShop:'active'
        } else if (this.props.activeTabNum === 3) {
            activeTabDesinger:'active'
        } else if (this.props.activeTabNum === 4) {
            activeTabWishlist:'active'
        } else if (this.props.activeTabNum === 5) {
            activeTabProfile:'active'
        }


    };*/

  render() {
    return (
      <Footer style={{ backgroundColor: "#fff" }}>
        <FooterTab
          style={{
            display: "flex",
            backgroundColor: "#fff"
          }}
        >
          <Button
            active={this.props.activeTabNum === 1}
            onPress={() => Actions.homeScreen()}
            style={{ backgroundColor: "#fff" }}
          >
            <Icon
              style={{
                color: this.props.activeTabNum === 1 ? "#000" : "#9f9f9f"
              }}
              name="home"
            />
            <Text
              style={{
                color: this.props.activeTabNum === 1 ? "#000" : "#9f9f9f"
              }}
            >
              home
            </Text>
          </Button>

          <Button
            active={this.props.activeTabNum === 2}
            onPress={() => Actions.shopScreen()}
            style={{ backgroundColor: "#fff" }}
          >
            <Icon
              style={{
                color: this.props.activeTabNum === 2 ? "#000" : "#9f9f9f"
              }}
              name="briefcase"
            />
            <Text
              style={{
                color: this.props.activeTabNum === 2 ? "#000" : "#9f9f9f"
              }}
            >
              Shop
            </Text>
          </Button>

          <Button
            active={this.props.activeTabNum === 3}
            onPress={() => Actions.designerScreen()}
            style={{ backgroundColor: "#fff" }}
          >
            <Icon
              style={{
                color: this.props.activeTabNum === 3 ? "#000" : "#9f9f9f"
              }}
              name="ribbon"
            />
            <Text
              style={{
                color: this.props.activeTabNum === 3 ? "#000" : "#9f9f9f"
              }}
            >
              Designer
            </Text>
          </Button>

          <Button
            active={this.props.activeTabNum === 4}
            onPress={() => Actions.wishlistScreen()}
            style={{ backgroundColor: "#fff" }}
          >
            <Icon
              style={{
                color: this.props.activeTabNum === 4 ? "#000" : "#9f9f9f"
              }}
              name="star"
            />
            <Text
              style={{
                color: this.props.activeTabNum === 4 ? "#000" : "#9f9f9f"
              }}
            >
              Wishlist
            </Text>
          </Button>

          <Button
            active={this.props.activeTabNum === 5}
            onPress={() => Actions.accountScreen()}
            style={{
              backgroundColor: "#fff",
              color: this.props.activeTabNum === 5 ? "#000" : "#9f9f9f"
            }}
          >
            <Icon
              style={{
                color: this.props.activeTabNum === 5 ? "#000" : "#9f9f9f"
              }}
              name="person"
            />
            <Text
              style={{
                color: this.props.activeTabNum === 5 ? "#000" : "#9f9f9f"
              }}
            >
              Me
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
