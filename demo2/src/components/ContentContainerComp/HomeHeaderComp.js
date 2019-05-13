import {
  Body,
  Button,
  Header,
  Icon,
  Right,
  Title,
  Item,
  Input,
  View,
  Badge,
  Text
} from "native-base";
import React from "react";
import StatusBarManger from "./StatusBarManager";
import { StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
const HomeHeaderComp = () => {
  return (
    <Header style={{ height: 120, backgroundColor: "#fff" }} noShadow>
      <StatusBarManger />

      <View style={styles.headerMainContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Title>Farfetch</Title>
          </View>

          <View style={styles.btnContainer}>
            <View>
              <Button
                style={styles.cartBtn}
                transparent
                onPress={() => {
                  Actions.bagScreen();
                }}
              >
                <Icon name="cart" style={{ color: "black" }} />
              </Button>
            </View>
          </View>
        </View>
        <View style={styles.searchBarContainer}>
          <Button
            block
            style={[
              styles.searchItem,
              { elevation: 0, justifyContent: "flex-start" }
            ]}
            onPress={() => {
              Actions.searchModalScreen();
            }}
          >
            <View style={{ flex: 1 }}>
              <Icon name="ios-search" />
            </View>
            <View style={{ flex: 9 }}>
              <Text style={{ color: "#aaa" }}>Search</Text>
            </View>
          </Button>
        </View>
      </View>
    </Header>
  );
};

const styles = StyleSheet.create({
  headerMainContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 2
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row"
  },
  titleContainer: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5,
    paddingTop: 5
  },
  btnContainer: {
    flex: 1,
    alignItems: "flex-end"
  },
  cartBtn: {
    justifyContent: "flex-end"
  },
  searchBarContainer: {
    flex: 1
  },
  searchItem: {
    borderBottomColor: "transparent",
    backgroundColor: "#f5f5f5",
    paddingLeft: 10,
    borderRadius: 7,
    height: 45
  }
});

export default HomeHeaderComp;
