import React from "react";
import { View, Text, StyleSheet, TextInput,ScrollView } from "react-native";
import Moment from "moment";

//import component
import Header from "@components/Header";


const OPERATOR = [
  { value: 1, label: "MPT" },
  { value: 2, label: "Telenor" },
  { value: 3, label: "Ooredoo" },
  { value: 4, label: "Mytel" },
];
export default class SimCardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: { value: null, label: null },
      branch:{value : null, label :null},
      branchs:[]
    };
  }

  componentDidMount = async () => {
    const operatorid = this.props.navigation.getParam("data").operator_id;
    const branchid = this.props.navigation.getParam("data").branch_id;
    if (operatorid == "1") {
      this.setState({
        operator: {
          value: operatorid,
          label: "MPT",
        },
      });
    }
    if (operatorid == "2") {
      this.setState({
        operator: {
          value: operatorid,
          label: "Telenor",
        },
      });
    }
    if (operatorid == "3") {
      this.setState({
        operator: {
          value: operatorid,
          label: "Ooredoo",
        },
      });
    }
    if (operatorid == "4") {
      this.setState({
        operator: {
          value: operatorid,
          label: "Mytel",
        },
      });
    }

    if (branchid == "1") {
      this.setState({
        branch: {
          value: branchid,
          label: "HO",
        },
      });
    }
    if (branchid == "2") {
      this.setState({
        branch: {
          value: branchid,
          label: "Linn 1",
        },
      });
    }
    if (branchid == "3") {
      this.setState({
        branch: {
          value: branchid,
          label: "Linn 2",
        },
      });
    }
    if (branchid == "4") {
      this.setState({
        branch: {
          value: branchid,
          label: "MPT Brand Shop",
        },
      });
    }
  };
  render() {
      let data=this.props.navigation.getParam("data");
    // console.log("View",this.props.navigation.getParam("data"));
    return (
      <View style={styles.container}>
        <Header
          name="Sim Card"
          //   img={require("@images/threeline.png")}
          Onpress={() => this.props.navigation.navigate("SIMCard")}
        />
        <ScrollView>
        <View style={[styles.formContainer,{marginTop:15}]}>
          <View style={styles.textContainer}>
            <Text style={styles.labelStyle}>Date</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
                value={Moment(data.created_at).format("DD-MM-YYYY")}
              style={styles.textInputStyle}
              editable={false}
            ></TextInput>
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.labelStyle}>Branch</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              value={this.state.branch.label}
              style={styles.textInputStyle}
              editable={false}
            ></TextInput>
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.labelStyle}>Operator</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              value={this.state.operator.label}
              style={styles.textInputStyle}
              editable={false}
            ></TextInput>
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.labelStyle}>Name</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
                value={data.name}
              style={styles.textInputStyle}
              editable={false}
            ></TextInput>
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.labelStyle}>NRC</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
                value={data.fullnrc}
              style={styles.textInputStyle}
              editable={false}
            ></TextInput>
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.labelStyle}>Phone No:</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
                value={data.phone}
              style={styles.textInputStyle}
              editable={false}
            ></TextInput>
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.labelStyle}>Card No:</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
                value={data.card_no}
              style={styles.textInputStyle}
              editable={false}
            ></TextInput>
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.labelStyle}>Serial No:</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
                value={data.serial}
              style={styles.textInputStyle}
              editable={false}
            ></TextInput>
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.labelStyle}>IMEI 1</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
                value={data.imei}
              style={styles.textInputStyle}
              editable={false}
            ></TextInput>
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.labelStyle}>IMEI 2</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
                value={data.imei2}
              style={styles.textInputStyle}
              editable={false}
            ></TextInput>
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.labelStyle}>Topup Amt</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
                value={data.topup}
              style={styles.textInputStyle}
              editable={false}
            ></TextInput>
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.labelStyle}>Model</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
                value={data.model}
              style={styles.textInputStyle}
              editable={false}
            ></TextInput>
          </View>
        </View>



        <View style={styles.formContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.labelStyle}>Address</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              multiline={true}
                value={data.address}
              style={styles.textAreaStyle}
              editable={false}
            ></TextInput>
          </View>
        </View>
        </ScrollView>
     
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  formContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  textContainer: {
    width: "30%",
    justifyContent: "center",
  },
  textInputContainer: {
    flex: 1,
    marginLeft: 20,
  },
  labelStyle: { fontSize: 15 },
  textInputStyle: {
    borderColor: "#ffffff",
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: "#ffffff",
  },
  textAreaStyle: {
    borderColor: "#ffffff",
    borderWidth: 1,
    minHeight: 80,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: "#ffffff",
    textAlignVertical:"top"
  },
});
