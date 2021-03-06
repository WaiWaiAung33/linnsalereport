import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
//import Screens
import Simcard from "@screens/home/dashboard/Simcard";
import Dtopup from "@screens/home/dashboard/Topup";

//import React
import React from "react";

export default createAppContainer(
  createMaterialTopTabNavigator(
    {
      Simcard: {
        screen: Simcard,
        navigationOptions: () => ({
          tabBarLabel: "Sim Card",
        }),
      },
      Dtopup: {
        screen: Dtopup,
        navigationOptions: () => ({
          tabBarLabel: "Topup",
        }),
      },
    },

    {
      initialRouteName: "Simcard",
      tabBarOptions: {
        //   scrollEnabled:true,
        upperCaseLabel: false,
        activeTintColor: "#898989",
        inactiveTintColor: "#898989",
        showLabel: true,
        tabStyle: {
          paddingTop: 25,
        },
        style: {
          backgroundColor: "#F2F2F2",
          height: 50,
        },
        labelStyle: {
          fontSize: 15,
          fontWeight: "bold",
          // marginTop: 30,
          // lineHeight: 40,
        },
        indicatorStyle: {
          backgroundColor: "#1179C2",
          height: 2,
        },
        tabStyle: {
          maxHeight: 50,
          borderRightWidth: 1,
          borderRightColor: "#E4E4E4",
        },
      },
    }
  )
);

// const styles = StyleSheet.create({
//   img: {
//     width: 30,
//     height: 30
//   }
// });
