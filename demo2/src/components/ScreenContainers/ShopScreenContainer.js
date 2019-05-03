import React from "react";
import { Container, Content, Tabs, Tab } from "native-base";
import WomenTab from "../Tabs/WomenTab";
import MenTab from "../Tabs/MenTab";
import KidsTab from "../Tabs/KidsTab";

const ShopScreenContainer = () => {
  return (
    <Container>
      <Tabs
        tabContainerStyle={{
          shadowOffset: { height: 0, width: 0 },
          shadowOpacity: 0,
          elevation: 0
        }}
      >
        <Tab heading={"WOMEN"}>
          <WomenTab />
        </Tab>

        <Tab heading={"MEN"}>
          <MenTab />
        </Tab>

        <Tab heading={"KIDS"}>
          <KidsTab />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default ShopScreenContainer;
