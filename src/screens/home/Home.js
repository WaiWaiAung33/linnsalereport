import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DrawerActions } from "react-navigation-drawer";
//import componentes
import Header from "@components/Header";

export default class Home extends React.Component {
  _handleOnPress() {
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          name="Linn Sale Report"
          img={require("@images/threeline.png")}
          Onpress={() => this._handleOnPress()}
        />
        <View style={styles.secondContainer}>
          <Text>Welcome To Mytel</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondContainer: {
    flex: 1,
    backgroundColor: "#FCF8F8",
    justifyContent: "center",
    alignItems: "center",
  },
});
