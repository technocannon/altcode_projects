import React, { Component } from "react";
import {
  Container,
  View,
  Text,
  Content,
  List,
  ListItem,
  Button
} from "native-base";
import RefineHeaderComp from "./../ContentContainerComp/RefineHeaderComp";
import { Actions } from "react-native-router-flux";
import { TouchableOpacity, FlatList } from "react-native";
class Sizes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [],
      itemId: ""
    };
  }

  componentDidMount() {
    fetch("http://estore.nfasoft.com/api/utils.php?sizes=1")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          data1: responseJson.response.sizes
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <Container>
        <RefineHeaderComp title="Sizes" />
        <Content>
          <FlatList
            data={this.state.data1}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  this.state.itemId = item.id;
                }}
              >
                <Text>{item.size}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(name, index) => index.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: "#cccccc" }} />
            )}
          />
          <Button
            block
            style={{ backgroundColor: "#22A7F0" }}
            onPress={() => {
              alert(this.state.itemId);
              Actions.itemsScreen({
                title: this.props.title,
                activeTab: this.props.activeTab,
                saleType: this.props.saleType,
                prePage: "refine",
                newItem: this.props.newItem,
                priceHigh: this.props.priceHigh,
                priceLow: this.props.priceLow,
                itemId: this.state.itemId,
                selectedFilter: "sizes"
              });
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "#fff",
                fontWeight: "bold"
              }}
            >
              SHOW RESULTS
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Sizes;
