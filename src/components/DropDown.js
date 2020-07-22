import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider
} from "react-native-popup-menu";

export default class DropDown extends React.Component {
  handleOnSelect(value, label) {
    if (this.props.onSelect) {
      this.props.onSelect(value, label);
    }
  }

  _renderMenuOptions() {
    let optionsArray = [];
    if (this.props.options) {
      if (this.props.options.length > 0) {
        this.props.options.forEach((data, index) => {
          optionsArray.push(
            <MenuOption
              disabled={this.props.value.value == data.value ? true : false}
              key={index}
              value={data}
              text={data.label}
              customStyles={{ backgroundColor: "red" }}
            />
          );
        });
      }
    }
    return optionsArray;
  }

  _renderMenuTrigger() {
    const placeholder = this.props.placeholder
      ? this.props.placeholder
      : "Select action";
    return (
      <MenuTrigger
        style={[
          styles.triggerWrapper,
          {
            width: this.props.widthContainer ? this.props.widthContainer :"95%",
            height: this.props.heightContainer
              ? this.props.heightContainer
              : 35,
            marginTop: this.props.marginContainer
              ? this.props.marginContainer
              : 0,

            marginLeft: this.props.marginLeftContainer
              ? this.props.marginLeftContainer
              : 0,
            backgroundColor: this.props.backgroundColorContainer
              ? this.props.backgroundColorContainer
              : "white",
          },
        ]}
      >
        <Text style={[styles.triggerText]}>
          {this.props.value.label ? this.props.value.label : placeholder}
        </Text>
        <View style={styles.downArrowIconWrapper}>
          <Image style={styles.downArrow} source={require("@images/down-arrow.png")} />
        </View>
      </MenuTrigger>
    );
  }

  render() {
    // alert(this.props.backgroundColorContainer);
    return (
        <MenuProvider>
      <View style={this.props.style}>
        <Menu
          onSelect={({ value, label }) => this.handleOnSelect(value, label)}
        >
          {this._renderMenuTrigger()}
          <MenuOptions
            customStyles={menuOptionsStyles}
            optionsContainerStyle={{
              maxHeight:300,
              width: this.props.optionsContainerWidth
                ? this.props.optionsContainerWidth
                : 220,
            }}
          >
            <ScrollView showsVerticalScrollIndicator={false}>{this._renderMenuOptions()}</ScrollView>
          </MenuOptions>
        </Menu>
      </View>
      </MenuProvider>
    );
  }
}

const styles = StyleSheet.create({
  downArrowIconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  triggerText: {
    flex: 1,
    fontSize: 14,
    margin: 10,
    backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center"
  },
  activeText: {
    color: "black",
  },
  inactiveText: {
    color: "gray",
  },
  downArrow: {
    width: 16,
    height: 16,
  },
  triggerWrapper: {
    borderRadius: 5,
    flexDirection: "row",
    borderWidth:1,
    borderColor:"#707070"
  },
});

// const triggerStyles = {
// triggerWrapper: {
//   borderRadius: 5,
//   flexDirection: "row",
//   backgroundColor: "white",
//   height: 37,
//   // height:props => props.triggerHeight ? props.triggerHeight : 37,
//   // height:this.props.trigerHeight ? this.props.trigerHeight : 37,
//   width: 300,
//   marginTop: 10,
//   // backgroundColor: "red",
//   // width: 234,
// },
// };

const menuOptionsStyles = {
  optionsWrapper: {},
  optionWrapper: {
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgray",
    borderStyle: "solid",
  },
  OptionTouchableComponent: TouchableOpacity,
  optionTouchable: {
    activeOpacity: 0.3,
  },
  optionText: {
    margin: 5,
    // fontFamily: Fonts.primary,
    fontSize: 14,
  },
};