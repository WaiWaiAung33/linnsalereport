import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Card extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.dateText}>{this.props.date}</Text>
        <View style={styles.secondContainer}>
          <View style={{ width: "40%" }}>
            <Text style={[styles.text, { fontWeight: "bold" }]}>Branch</Text>
            <Text style={[styles.text, { fontWeight: "bold" }]}>Name</Text>
            <Text style={[styles.text, { fontWeight: "bold" }]}>Operator</Text>
            <Text style={[styles.text, { fontWeight: "bold" }]}>Topup Type</Text>
            <Text>Qty</Text>
          </View>
          <View style={{ width: "60%" }}>
            <Text style={styles.text}>{this.props.branchname}</Text>
            <Text style={styles.text}>{this.props.name}</Text>
            <Text style={styles.text}>{this.props.operator}</Text>
            <Text style={styles.text}>{this.props.topuptype}</Text>
            <Text style={styles.text}>{this.props.qty}</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#707070",
    padding: 10,
  },
  text: {
    paddingTop: 5,
  },
  secondContainer: {
    // flex:1,
    flexDirection: "row",
  },
  dateText: {
    fontWeight: "bold",
    textAlign: "right",
  },
});