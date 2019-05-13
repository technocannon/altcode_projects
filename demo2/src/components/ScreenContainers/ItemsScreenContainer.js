import React from "react";
import { Container, Content, View, Icon, Text, Button } from "native-base";
import ItemsCardComp from "./../Cards/ItemsCardComp";
import { Actions } from "react-native-router-flux";
import { ActivityIndicator } from "react-native";
export default class ItemsScreenContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [],
      address: "",
      returnData: [],
      counting: "",
      loading: true
    };
  }
  getNumberCount() {
    count = 0;
    if (this.props.saleType && this.props.title) {
      this.state.data1.forEach(element => {
        if (
          element.category == this.props.saleType &&
          element.sub_category == this.props.title
        ) {
          count++;
        }
      });
    } else {
      this.state.data1.forEach(element => {
        count++;
      });
    }
    return count;
  }
  getData() {
    if (this.props.saleType && this.props.title) {
      this.state.data1.forEach(element => {
        if (
          element.category == this.props.saleType &&
          element.sub_category == this.props.title
        ) {
          this.state.returnData.push(element);
        }
      });
    } else {
      this.state.data1.forEach(element => {
        this.state.returnData.push(element);
      });
    }
  }
  withoutRefine() {
    if (this.props.saleType == undefined) {
      if (this.props.prePage == undefined) {
        this.state.address =
          "http://estore.nfasoft.com/api/products.php?gender=" +
          this.props.sectionName;
      } else this.props.prePage == "refine";
      {
        if (this.props.selectedFilter == undefined) {
          if (this.props.newItem == true) {
            this.state.address =
              "http://estore.nfasoft.com/api/products.php?sort=new&gender=" +
              this.props.sectionName;
          } else if (this.props.priceHigh == true) {
            this.state.address =
              "http://estore.nfasoft.com/api/products.php?sort=highest&gender=" +
              this.props.sectionName;
          } else if (this.props.priceLow == true) {
            this.state.address =
              "http://estore.nfasoft.com/api/products.php?sort=lowest&gender=" +
              this.props.sectionName;
          }
        } else if (this.props.selectedFilter == "designers") {
          this.state.address =
            "http://estore.nfasoft.com/api/products.php?gender=" +
            this.props.sectionName +
            "&brand=" +
            this.props.itemId;
        } else if (this.props.selectedFilter == "sizes") {
          this.state.address =
            "http://estore.nfasoft.com/api/products.php?gender=" +
            this.props.sectionName +
            "&size=" +
            this.props.itemId;
        } else if (this.props.selectedFilter == "colors") {
          this.state.address =
            "http://estore.nfasoft.com/api/products.php?gender=" +
            this.props.sectionName +
            "&colors=" +
            this.props.itemId;
        }
      }
    } else {
      if (this.props.prePage == undefined) {
        if (this.props.activeTabNum == 1) {
          this.state.address =
            "http://estore.nfasoft.com/api/products.php?gender=women";
        } else if (this.props.activeTabNum == 2) {
          this.state.address =
            "http://estore.nfasoft.com/api/products.php?gender=men";
        } else if (this.props.activeTabNum == 3) {
          this.state.address =
            "http://estore.nfasoft.com/api/products.php?gender=kids";
        }
      } else if (this.props.prePage == "refine") {
        if (this.props.selectedFilter == undefined) {
          if (this.props.activeTabNum == 1) {
            if (this.props.newItem == true) {
              alert(this.props.newItem);
              this.state.address =
                "http://estore.nfasoft.com/api/products.php?sort=new&gender=women";
            } else if (this.props.priceHigh == true) {
              this.state.address =
                "http://estore.nfasoft.com/api/products.php?sort=highest&gender=women";
            } else if (this.props.priceLow == true) {
              this.state.address =
                "http://estore.nfasoft.com/api/products.php?sort=lowest&gender=women";
            }
          } else if (this.props.activeTabNum == 2) {
            if (this.props.newItem == true) {
              this.state.address =
                "http://estore.nfasoft.com/api/products.php?sort=new&gender=men";
            } else if (this.props.priceHigh == true) {
              this.state.address =
                "http://estore.nfasoft.com/api/products.php?sort=highest&gender=men";
            } else if (this.props.priceLow == true) {
              this.state.address =
                "http://estore.nfasoft.com/api/products.php?sort=lowest&gender=men";
            }
          } else if (this.props.activeTabNum == 3) {
            if (this.props.newItem == true) {
              this.state.address =
                "http://estore.nfasoft.com/api/products.php?sort=new&gender=kids";
            } else if (this.props.priceHigh == true) {
              this.state.address =
                "http://estore.nfasoft.com/api/products.php?sort=highest&gender=kids";
            } else if (this.props.priceLow == true) {
              this.state.address =
                "http://estore.nfasoft.com/api/products.php?sort=lowest&gender=kids";
            }
          }
        } else if (this.props.selectedFilter == "designers") {
          if (this.props.activeTabNum == 1) {
            alert("yaha tkss");

            this.state.address =
              "http://estore.nfasoft.com/api/products.php?gender=women&brand=" +
              this.props.itemId;
          } else if (this.props.activeTabNum == 2) {
            alert(this.props.newItem);
            this.state.address =
              "http://estore.nfasoft.com/api/products.php?gender=men&brand=" +
              this.props.itemId;
          } else if (this.props.activeTabNum == 3) {
            alert(this.props.newItem);
            this.state.address =
              "http://estore.nfasoft.com/api/products.php?gender=kids&brand=" +
              this.props.itemId;
          }
        }
      } else if (this.props.selectedFilter == "sizes") {
        if (this.props.activeTabNum == 1) {
          alert("yaha tkss");

          this.state.address =
            "http://estore.nfasoft.com/api/products.php?gender=women&size=" +
            this.props.itemId;
        } else if (this.props.activeTabNum == 2) {
          alert(this.props.newItem);
          this.state.address =
            "http://estore.nfasoft.com/api/products.php?gender=men&size=" +
            this.props.itemId;
        } else if (this.props.activeTabNum == 3) {
          alert(this.props.newItem);
          this.state.address =
            "http://estore.nfasoft.com/api/products.php?gender=kids&size=" +
            this.props.itemId;
        }
      } else if (this.props.selectedFilter == "colors") {
        if (this.props.activeTabNum == 1) {
          alert("yaha tkss");

          this.state.address =
            "http://estore.nfasoft.com/api/products.php?gender=women&colors=" +
            this.props.itemId;
        } else if (this.props.activeTabNum == 2) {
          alert(this.props.newItem);
          this.state.address =
            "http://estore.nfasoft.com/api/products.php?gender=men&colors=" +
            this.props.itemId;
        } else if (this.props.activeTabNum == 3) {
          alert(this.props.newItem);
          this.state.address =
            "http://estore.nfasoft.com/api/products.php?gender=kids&colors=" +
            this.props.itemId;
        }
      }
    }
  }

  componentDidMount() {
    this.withoutRefine();
    fetch(this.state.address)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          data1: responseJson.response.data
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    if (this.state.loading == false) {
      this.getData();
      this.state.msg = <Text>{this.getNumberCount()}</Text>;
    } else {
      this.state.msg = <ActivityIndicator size="large" color="#0000ff" />;
    }
    alert("item" + this.props.itemId);

    // alert(this.props.activeTabNum);
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
            <View style={{ flex: 1 }}>{this.state.msg}</View>
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
                  onPress={() => {
                    Actions.refineScreen({
                      title: this.props.title,
                      activeTab: this.props.activeTabNum,
                      saleType: this.props.saleType
                    });
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

          {this.state.returnData.map((productCard, i) => {
            return (
              <View style={{ flexDirection: "row", width: "100%" }}>
                <ItemsCardComp
                  key={productCard.id}
                  product_id={productCard.id}
                  imageSource={{
                    uri: "http://estore.nfasoft.com/images/" + productCard.image
                  }}
                  storeType="New Season"
                  productName={productCard.product_name}
                  description={productCard.short_description}
                  price={productCard.actual_price}
                />
                <ItemsCardComp
                  product_id={productCard.id}
                  imageSource={{
                    uri: "http://estore.nfasoft.com/images/" + productCard.image
                  }}
                  storeType="New Season"
                  productName={productCard.product_name}
                  description={productCard.short_description}
                  price={productCard.actual_price}
                />
              </View>
            );
          })}
        </Content>
      </Container>
    );
  }
}
