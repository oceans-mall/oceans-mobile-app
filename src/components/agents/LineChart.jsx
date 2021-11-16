import React from "react";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import COLORS from "../../consts/colors";

export const Chart = () => {
  const linedata = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [600, 500, 800, 200, 100, 0, 150, 400, 200, 300, 700, 100],
        strokeWidth: 3,
      },
    ],
  };
  return (
    <View>
      <Text style={{textAlign:'center', fontSize:20, fontWeight:'600', color:COLORS.primary}}>Monthly Trade</Text>
      <LineChart
        data={linedata}
        width={Dimensions.get("window").width}
        height={280}
         margin={10}
        yAxisLabel={"$"}
        chartConfig={{
          backgroundColor: COLORS.primary,
          backgroundGradientFrom: COLORS.primary,
          backgroundGradientTo: COLORS.gray,
          fontSize: 15,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        bezier
        style={{
          margin: 8,
          borderRadius: 5,
        }}
      />
    </View>
  );
};
