import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import { HomeScreen } from './HomeScreen';

function PlaceholderScreen({ title }: { title: string }) {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-white text-lg font-semibold">{title}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export function AppTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#0E1032',
          borderTopColor: '#1C214A',
          height: 80,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = 'home';
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Card':
              iconName = focused ? 'card' : 'card-outline';
              break;
            case 'Transfers':
              iconName = focused ? 'swap-horizontal' : 'swap-horizontal';
              break;
            case 'Account':
              iconName = focused ? 'person' : 'person-outline';
              break;
          }

          // Active styling with subtle background highlight
          if (focused) {
            return (
              <View className="items-center justify-center bg-[#13163B] px-4 py-2 rounded-xl">
                <Ionicons name={iconName as any} size={20} color="white" />
                <Text className="text-xs text-white mt-1">{route.name}</Text>
              </View>
            );
          }
          return (
            <View className="items-center justify-center px-4 py-2 rounded-xl">
              <Ionicons name={iconName as any} size={20} color="#6B7280" />
              <Text className="text-xs text-gray-400 mt-1">{route.name}</Text>
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Card" children={() => <PlaceholderScreen title="Card" />} />
      <Tab.Screen name="Transfers" children={() => <PlaceholderScreen title="Transfers" />} />
      <Tab.Screen name="Account" children={() => <PlaceholderScreen title="Account" />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
