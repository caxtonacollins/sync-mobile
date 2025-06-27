import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type IconName = keyof typeof Ionicons.glyphMap;

interface ActionButtonProps {
  icon: IconName;
  label: string;
  onPress?: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-[#13163B] items-center justify-center w-20 h-16 rounded-xl m-1"
      activeOpacity={0.7}
    >
      <Ionicons name={icon} size={20} color="white" />
      <Text className="text-xs text-white mt-1">{label}</Text>
    </TouchableOpacity>
  );
};
