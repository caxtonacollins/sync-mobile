import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface BalanceCardProps {
  label: string;
  balance: string;
  percentageChange?: string;
  iconName: keyof typeof FontAwesome.glyphMap;
  onPress?: () => void;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({ label, balance, percentageChange, iconName, onPress }) => {
  return (
    <View className="bg-[#13163B] flex-1 rounded-xl p-4 m-1 border border-[#9693a873]" style={{ minWidth: '48%' }}>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Text className="text-xs text-gray-400 mr-1">{label}</Text>
          {percentageChange && <Text className="text-[10px] text-green-400">{percentageChange}</Text>}
        </View>
        <FontAwesome name={iconName} size={16} color="white" onPress={onPress} />
      </View>
      <Text className="text-white text-xl font-bold mt-2">{balance}</Text>
    </View>
  );
};
