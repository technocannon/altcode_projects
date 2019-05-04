import React from "react";
import { Container, Content, Tab, Tabs } from "native-base";
import DesingerMenTab from "../Tabs/DesignerMenTab";
import DesignerWomenTab from "../Tabs/DesignerWomenTab";
import DesignerKidsTab from "../Tabs/DesignerKidsTab";

const DesignerScreenContainer = () => {
  return (
    <Container>
      <Container>
        <Tabs>
          <Tab heading={"WOMEN"}>
            <DesignerWomenTab />
          </Tab>

          <Tab heading={"MEN"}>
            <DesingerMenTab />
          </Tab>

          <Tab heading={"KIDS"}>
            <DesignerKidsTab />
          </Tab>
        </Tabs>
      </Container>
    </Container>
  );
};

export default DesignerScreenContainer;
