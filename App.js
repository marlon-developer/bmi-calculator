import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0, pasta: 0, result: 0, resultText: "" };
    this.calculate = this.calculateBMI.bind(this);
  }

  calculateBMI() {
    let bmi = this.state.pasta / Math.pow(this.state.height, this.state.height);
    let stateResult = this.state;
    stateResult.result = bmi;

    if (stateResult.result < 16) {
      stateResult.resultText = "Magreza Grave";
    } else if (stateResult.result < 17) {
      stateResult.resultText = "Magreza Moderada";
    } else if (stateResult.result < 18.5) {
      stateResult.resultText = "Magreza Leve";
    } else if (stateResult.result < 25) {
      stateResult.resultText = "Saudável";
    } else if (stateResult.result < 30) {
      stateResult.resultText = "Sobrepeso";
    } else if (stateResult.result < 35) {
      stateResult.resultText = "Obesidade Grau I";
    } else if (stateResult.result >= 35 && stateResult.result < 40) {
      stateResult.resultText = "Obesidade Grau II (Severa)";
    } else {
      stateResult.resultText = "Obesidade Grau III (Mórbida)";
    }

    stateResult.result = bmi;
    this.setState(stateResult);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputCalc}>
          <TextInput
            style={styles.input}
            placeholder="Massa"
            keyboardType="numeric"
            onChangeText={(pasta) => {
              this.setState({ pasta });
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Altura"
            keyboardType="numeric"
            onChangeText={(height) => {
              this.setState({ height });
            }}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calculate}>
          <Text style={styles.buttonText}>Calcular IMC</Text>
        </TouchableOpacity>

        <Text style={styles.result}>{this.state.result.toFixed(2)}</Text>
        <Text style={[styles.result, { fontSize: 35 }]}>
          {this.state.resultText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24,
    color: "gray",
  },
  inputCalc: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#89ffa5",
  },
  buttonText: {
    alignSelf: "center",
    padding: 30,
    fontSize: 25,
    color: "#6dc4a4",
    fontWeight: "bold",
  },
  result: {
    alignSelf: "center",
    color: "",
    color: "lightgray",
    fontSize: 65,
    padding: 15,
  },
});
