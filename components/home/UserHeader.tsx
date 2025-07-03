import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image } from 'react-native';

interface UserHeaderProps {
  name: string;
  email: string;
  avatarUrl: string;
}

export const UserHeader: React.FC<UserHeaderProps> = ({ name, email, avatarUrl }) => {
  return (
    <View className="flex-row items-center justify-between my-4">
      <View className="flex-row items-center">
        <Image source={{ uri: avatarUrl }} className="w-12 h-12 rounded-full mr-3" />
        <View>
          <Text className="text-lg font-semibold text-white">{name}</Text>
          <Text className="text-xs text-gray-400">{email}</Text>
        </View>
      </View>
      <Ionicons name="notifications-outline" size={24} color="white" />
    </View>
  );
};
