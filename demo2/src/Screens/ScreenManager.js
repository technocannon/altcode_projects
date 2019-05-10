import React from "react";
import { Scene, Router } from "react-native-router-flux";
import HomeScreen from "./HomeScreen";
import ShopNowScreen from "./ShopNowScreen";
import AccountScreen from "./AccountScreen";
import DesignerScreen from "./DesignerScreen";
import ShopScreen from "./ShopScreen";
import WishlistScreen from "./WishlistScreen";
import ProductDetail from "./ProductDetail";
import RegisterScreen from "./RegisterScreen";
import ItemsScreen from "./ItemsScreen";
import RefineScreen from "./RefineScreen";
import Designers from "./../components/RefineScreens/Designers";
import Sizes from "./../components/RefineScreens/Sizes";
import Colors from "./../components/RefineScreens/Colors";
import PriceRange from "./../components/RefineScreens/PriceRange";
import BagScreen from "./BagScreen";
const ScreenManager = () => {
  return (
    <Router>
      <Scene key={"root"}>
        <Scene
          key={"homeScreen"}
          component={HomeScreen}
          hideNavBar={true}
          initial
        />
        <Scene key={"shopNowScreen"} component={ShopNowScreen} />
        <Scene
          key={"accountScreen"}
          component={AccountScreen}
          hideNavBar={true}
        />
        <Scene
          key={"designerScreen"}
          component={DesignerScreen}
          hideNavBar={true}
        />
        <Scene key={"shopScreen"} component={ShopScreen} hideNavBar={true} />
        <Scene
          key={"wishlistScreen"}
          component={WishlistScreen}
          hideNavBar={true}
        />
        <Scene
          key={"productDetail"}
          component={ProductDetail}
          hideNavBar={true}
        />
        <Scene
          key={"registerScreen"}
          component={RegisterScreen}
          hideNavBar={true}
        />
        <Scene key={"itemsScreen"} component={ItemsScreen} hideNavBar={true} />
        <Scene
          key={"refineScreen"}
          component={RefineScreen}
          hideNavBar={true}
        />
        <Scene
          key={"designersScreen"}
          component={Designers}
          hideNavBar={true}
        />
        <Scene key={"sizesScreen"} component={Sizes} hideNavBar={true} />
        <Scene key={"colorsScreen"} component={Colors} hideNavBar={true} />
        <Scene
          key={"priceRangeScreen"}
          component={PriceRange}
          hideNavBar={true}
        />
        <Scene
          key={"bagScreen"}
          component={BagScreen}
          title="My shopping Bag"
        />
      </Scene>
    </Router>
  );
};

export default ScreenManager;
