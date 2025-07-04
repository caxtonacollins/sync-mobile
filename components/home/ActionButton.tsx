import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ActionButtonProps {
  icon: React.FC<any>;
  label: string;
  onPress?: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-[#13163B] border border-[#9693a873] items-center justify-center w-20 h-16 rounded-xl m-1"
      activeOpacity={0.7}
    >
            {React.createElement(icon, { width: 20, height: 20 })}
      <Text className="text-xs text-white mt-1">{label}</Text>
    </TouchableOpacity>
  );
};
