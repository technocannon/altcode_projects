import React from "react";
import { ScrollView } from "react-native";
import { Container, View } from "native-base";
import CardComp from "./CardComp";
import CardContainerHeader from "./CardContainerHeader";
import ButtonComp from "../ContentContainerComp/ButtonComp";
import { Actions } from "react-native-router-flux";

/* Contains and handles all the cards
 * Requires following Props
 * -----------------------------------
 * sectionName
 * */

export default class HomeScreenCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeScreenProductDetails: [],
      baseAddress: "http://estore.nfasoft.com"
    };
  }
  componentDidMount() {
    fetch("http://estore.nfasoft.com/api/products.php")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          homeScreenProductDetails: responseJson.response.data
        });
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }

  render() {
    const imageSource = require("./../../Resources/Images/6.png");
    return (
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <CardContainerHeader name={this.props.sectionName} />

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {this.state.homeScreenProductDetails.map(productCard => {
            return (
              <CardComp
                key={productCard.id}
                imgSource={imageSource}
                designerName={productCard.product_name}
                shortDescription={productCard.short_description}
                price={productCard.offer_price}
                cardHeight={270}
                cardWidth={200}
                leftMargin={20}
              />
            );
          })}
        </ScrollView>
        <ButtonComp
          title={"Shop Now"}
          onPressAction={() => Actions.shopNowScreen()}
        />
      </View>
    );
  }
}
