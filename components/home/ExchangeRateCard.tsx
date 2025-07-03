import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { MaterialIcons } from '@expo/vector-icons';
import { IconSymbol } from '../ui/IconSymbol';

// Dummy data for the chart
const chartData = {
  labels: ['1H', '1D', '1W', '1M', '1Y', 'All'],
  datasets: [
    {
      data: [1800, 2100, 2000, 2400, 2300, 2800],
      color: (opacity = 1) => `rgba(45, 82, 236, ${opacity})`,
      strokeWidth: 4,
    },
  ],
};


export const ExchangeRateCard = () => {
  const screenWidth = Dimensions.get('window').width - 20;
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const currencies = [
    { name: 'USD', icon: 'dollarsign.circle.fill' },
    { name: 'Starks', icon: 'star.fill' },
    { name: 'ETH', icon: 'coloncurrencysign.circle.fill' },
  ];

  const handleCurrencyChange = (currency: any) => {
    setSelectedCurrency(currency.name);
    setDropdownOpen(false);
  };


  return (
    <View style={styles.cardContainer} className="border border-gray-800">
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Exchange Rate</Text>
        <View>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={() => setDropdownOpen(!isDropdownOpen)}
          >
            <IconSymbol
              name={
                currencies.find((c) => c.name === selectedCurrency)?.icon as any
              }
              size={22}
              color="white"
              style={{ marginRight: 8 }}
            />
            <Text style={styles.dropdownButtonText}>{selectedCurrency}</Text>
            <MaterialIcons name="arrow-drop-down" size={22} color="gray" />
          </TouchableOpacity>
          {isDropdownOpen && (
            <View style={styles.dropdownMenu}>
              {currencies.map((currency) => (
                <TouchableOpacity
                  key={currency.name}
                  onPress={() => handleCurrencyChange(currency)}
                  style={styles.dropdownItem}
                >
                  <IconSymbol
                    name={currency.icon as any}
                    size={22}
                    color="gray"
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles.dropdownItemText}>{currency.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>

      <View style={{ alignItems: 'center' }}>
        <LineChart
          data={chartData}
          width={screenWidth - 20}
          height={180}
          withShadow
          withInnerLines={false}
          withOuterLines={false}
          // withVerticalLabels={false}
          // yAxisLabel="$"
          // yAxisSuffix="k"
          withHorizontalLabels={false}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: '#13163B',
            backgroundGradientTo: '#13163B',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(45, 82, 236, ${opacity})`,
            propsForDots: {
              r: '4',
              strokeWidth: '2',
              stroke: '#2D52EC',
            },
            fillShadowGradientFrom: '#2D52EC',
            fillShadowGradientFromOpacity: 0.2,
            fillShadowGradientTo: '#13163B',
            fillShadowGradientToOpacity: 0.05,
          }}
          bezier
          style={{
            marginVertical: 0,
            borderRadius: 16,
            // overflow: 'hidden',
            marginLeft: 0,
            padding: 0,
          }}
        />
      </View>

      {/* <View style={styles.timeRangeContainer}>
        {chartData.labels.map((range) => (
          <TouchableOpacity
            key={range}
            onPress={() => setActiveRange(range)}
          >
            <Text
              style={[
                styles.timeRangeText,
                activeRange === range && styles.activeTimeRangeText,
              ]}
            >
              {range}
            </Text>
          </TouchableOpacity>
        ))}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#13163B',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderColor: '#1f2937',
    borderWidth: 1,
  },
  dropdownButtonText: {
    color: 'gray',
    marginRight: 4,
    fontWeight: '500',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 40,
    right: 0,
    backgroundColor: 'transparent',
    borderRadius: 8,
    zIndex: 1000,
    borderColor: '#1f2937',
    borderWidth: 1,
  },
  dropdownItem: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownItemText: {
    color: 'gray',
  },
  timeRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  timeRangeText: {
    color: '#718096',
    fontSize: 14,
  },
  activeTimeRangeText: {
    color: '#2D52EC',
    fontWeight: 'bold',
  },
});
