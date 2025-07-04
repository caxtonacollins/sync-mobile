import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import BellIcon from '../../assets/icons/Bell_pin_duotone_line.svg';

interface UserHeaderProps {
  name: string;
  email: string;
  avatarUrl: ImageSourcePropType;
}

export const UserHeader: React.FC<UserHeaderProps> = ({ name, email, avatarUrl }) => {
  return (
    <View className="flex-row items-center justify-between my-4">
      <View className="flex-row items-center">
        <Image source={avatarUrl} className="w-12 h-12 rounded-full mr-3" />
        <View>
          <Text className="text-lg font-semibold text-white">{name}</Text>
          <Text className="text-xs text-gray-400">{email}</Text>
        </View>
      </View>
      <BellIcon width={24} height={24} color="white" />
    </View>
  );
};
