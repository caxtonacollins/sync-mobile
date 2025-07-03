import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { UserHeader } from '../../components/home/UserHeader';
import { BalanceCard } from '../../components/home/BalanceCard';
import { ActionButton } from '../../components/home/ActionButton';
import { ExchangeRateCard } from '../../components/home/ExchangeRateCard';
import { TransactionItem } from '../../components/home/TransactionItem';

const HomeScreen = () => {
  const transactions = [
    {
      id: '#2934359w9432',
      name: 'StarkNat',
      amount: '$1,500.00',
      date: '20.04.2025',
      positive: false,
    },
    {
      id: '#2934359w9432',
      name: 'StarkNat',
      amount: '$12,942.30',
      date: '17.04.2025',
      positive: true,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#0E1032]">
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
        <UserHeader
          name="Elijah Okumar"
          email="Hello@elijah.com"
          avatarUrl="https://randomuser.me/api/portraits/men/1.jpg"
        />

        {/* Balance Cards */}
        <View className="flex-row justify-between mt-2">
          <BalanceCard label="USD Balance" balance="$36,872.94" percentageChange="72% (24d)" iconName="dollar" />
          <BalanceCard label="ETH Balance" balance="$36,872.94" percentageChange="72% (24d)" iconName="bitcoin" />
        </View>

        {/* Quick Action Buttons */}
        <View className="flex-row justify-between my-4">
          <ActionButton icon="add" label="Add" />
          <ActionButton icon="swap-horizontal" label="Swap" />
          <ActionButton icon="download" label="Receive" />
        </View>

        {/* Exchange Rate */}
        <ExchangeRateCard />

        {/* Transaction History Header */}
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-white font-semibold">Transaction History</Text>
          <Ionicons name="arrow-down" size={18} color="white" />
        </View>

        {/* Transaction Items */}
        {transactions.map((t, idx) => (
          <TransactionItem
            key={idx}
            id={t.id}
            name={t.name}
            amount={t.amount}
            date={t.date}
            positive={t.positive}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;