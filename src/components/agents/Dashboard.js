import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import COLORS from "../../consts/colors";
import { Chart } from "./LineChart";
export const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          //padding: 5,
          margin: 5,
        }}
      >
        <View style={styles.trade}>
          <Text style={styles.tradeTitle}>Trade Total</Text>
          <Text style={styles.tradeAmount}>GHS1000</Text>
        </View>
        <View style={styles.trade}>
          <Text style={styles.tradeTitle}>Fishermen</Text>
          <Text style={styles.tradeAmount}>50</Text>
        </View>
        <View style={styles.trade}>
          <Text style={styles.tradeTitle}>Purchase</Text>
          <Text style={styles.tradeAmount}>GHS100</Text>
        </View>
      </View>
      {/* Graph to show monthly sales */}
      {/* <View style={{ flex: 4,margin:5, backgroundColor: "gold" }}>
        <Chart />
      </View> */}
      <Chart />
      {/* Tables of registered fishermen */}
      <View style={{ flex: 4,margin:5, backgroundColor: "green" }}>
        <Text>Tables</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trade: {
    height: "80%",
    width: "30%",
    borderRadius: 10,
    borderColor:'gold',
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 7,
  },
  tradeTitle: {
    color: COLORS.gray,
    fontSize: 16,
    fontWeight: '600'
  },
  tradeAmount: {
    color: "#000",
    marginTop: 5,
    fontSize: 20,
  },
});
