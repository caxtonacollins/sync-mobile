import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TransactionItemProps {
  id: string;
  name: string;
  amount: string;
  date: string;
  positive?: boolean;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({ id, name, amount, date, positive }) => {
  return (
    <View className="flex-row items-center justify-between py-3 border-b border-[#1C214A]">
      <View className="flex-row items-center">
        <Ionicons name="swap-vertical" size={18} color="#6B7280" />
        <View className="ml-3">
          <Text className="text-white font-medium">{id}</Text>
          <Text className="text-xs text-gray-500">{name}</Text>
        </View>
      </View>
      <View className="items-end">
        <Text className={positive ? 'text-green-400 font-semibold' : 'text-red-400 font-semibold'}>{amount}</Text>
        <Text className="text-xs text-gray-500">{date}</Text>
      </View>
    </View>
  );
};
