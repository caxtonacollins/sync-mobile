import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { MaterialIcons } from '@expo/vector-icons';

// Dummy data for the chart
const chartData = {
  labels: ["1H", "1D", "1W", "1M", "1Y", "All"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      strokeWidth: 2,
      color: () => `#2D52EC`,
    },
  ],
};

export const ExchangeRateCard = () => {
  const screenWidth = Dimensions.get('window').width - 40; // some padding
  return (
    <View className="bg-[#13163B] rounded-xl p-4 mb-4">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-white font-semibold">Exchange Rate</Text>
        <View className="flex-row items-center space-x-1">
          <Text className="text-white">$ USD</Text>
          <MaterialIcons name="arrow-drop-down" size={18} color="white" />
        </View>
      </View>
      <LineChart
        data={chartData}
        width={screenWidth}
        height={180}
        chartConfig={{
          backgroundGradientFrom: "#13163B",
          backgroundGradientTo: "#13163B",
          decimalPlaces: 0,
          color: () => `#2D52EC`,
          labelColor: () => `#718096`,
          propsForDots: {
            r: "3",
            strokeWidth: "2",
            stroke: "#2D52EC",
          },
        }}
        bezier
        withDots={false}
        withInnerLines={false}
        withOuterLines={false}
        style={{ borderRadius: 12 }}
      />
    </View>
  );
};
