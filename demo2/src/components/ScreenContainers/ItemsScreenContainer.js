import React from "react";
import { Container, Content, View, Icon, Text, Button } from "native-base";
import ItemsCardComp from "./../Cards/ItemsCardComp";

const ItemsScreenContainer = () => {
  return (
    <Container>
      <Content style={{ backgroundColor: "#eee" }}>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff"
          }}
        >
          <View style={{ flex: 1 }}>
            <Text>423 Items</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "flex-end"
            }}
          >
            <View>
              <Button
                style={{
                  flexDirection: "row",
                  borderWidth: 0.5,
                  borderRadius: 5,
                  borderColor: "#aaa",
                  paddingLeft: 10,
                  paddingRight: 10,
                  shadowOffset: { height: 0, width: 0 },
                  shadowOpacity: 0,
                  elevation: 0,
                  backgroundColor: "transparent"
                }}
              >
                <View>
                  <Icon
                    name="filter-list"
                    type="MaterialIcons"
                    style={{ color: "#000" }}
                  />
                </View>
                <View>
                  <Text>Refine</Text>
                </View>
              </Button>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: 15
          }}
        >
          <Text style={{ color: "#BFAC88", fontWeight: "bold" }}>
            Free Returns
          </Text>
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <ItemsCardComp
            storeType="New Season"
            productName="PARIA"
            description="Long print short sleeved T-shirt"
            price="368"
          />
          <ItemsCardComp
            storeType="Outlet"
            productName="PARIA"
            description="Long print short sleeved T-shirt"
            price="368"
          />
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <ItemsCardComp
            storeType="New Season"
            productName="PARIA"
            description="Long print short sleeved T-shirt"
            price="368"
          />
          <ItemsCardComp
            storeType="New Season"
            productName="PARIA"
            description="Long print short sleeved T-shirt"
            price="368"
          />
        </View>
      </Content>
    </Container>
  );
};

export default ItemsScreenContainer;
