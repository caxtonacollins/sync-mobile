import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

const TransfersScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-[#0E1032]">
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
                <View className="flex-1 items-center justify-center text-white">
                    <Text className="text-2xl font-bold  text-white">Transfer Screen</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default TransfersScreen;