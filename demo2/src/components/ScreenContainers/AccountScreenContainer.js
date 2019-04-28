import React from "react";
import { Container, Content, View, List, ListItem, Text } from "native-base";
import WishlistCardComp from "./../Cards/WishlistCardComp";

const AccountScreenContainer = () => {
  return (
    <Container>
      <Content>
        <List>
          <ListItem itemDivider>
            <Text>My Account</Text>
          </ListItem>
          <ListItem>
            <Text>Orders & returns</Text>
          </ListItem>
          <ListItem>
            <Text>Details & password</Text>
          </ListItem>
          <ListItem>
            <Text>Address book</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>My Location</Text>
          </ListItem>
          <ListItem>
            <Text>Pakistan (USD $)</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>My Shop Preferences</Text>
          </ListItem>
          <ListItem>
            <Text>Men</Text>
          </ListItem>
          <ListItem>
            <Text>Women</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>My Settings</Text>
          </ListItem>
          <ListItem>
            <Text>Notifications & email</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Support</Text>
          </ListItem>
          <ListItem>
            <Text>About Farfetch</Text>
          </ListItem>
          <ListItem>
            <Text>Terms & conditions</Text>
          </ListItem>
          <ListItem>
            <Text>Privacy Policy</Text>
          </ListItem>
          <ListItem>
            <Text>FAQ's & guides</Text>
          </ListItem>
          <ListItem>
            <Text>Boutique partners</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Contact Us</Text>
          </ListItem>
          <ListItem>
            <Text>icons</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default AccountScreenContainer;
