import React, { Component } from "react";
import { Container, View, Text, Content } from "native-base";
import { FlatList, TouchableOpacity } from "react-native";
import RefineHeaderComp from "./../ContentContainerComp/RefineHeaderComp";
import { Actions } from "react-native-router-flux";
export default class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: ""
    };
  }

  getColors() {}
  componentDidMount() {
    fetch("http://estore.nfasoft.com/api/utils.php?colors=1")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          data1: responseJson.response.colors
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    alert("ti=" + this.props.title);

    return (
      <Container>
        <RefineHeaderComp title="Colours" />
        <View>
          <FlatList
            data={this.state.data1}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Text>{item.color}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(name, index) => index.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: "#cccccc" }} />
            )}
          />
        </View>
      </Container>
    );
  }
}
