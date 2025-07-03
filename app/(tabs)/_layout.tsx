import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveBackgroundColor: '#1A1A41',
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                backgroundColor: '#0E1032',
                height: 90,
                borderTopWidth: 0.2,
                borderTopColor: '#1f2937'  ,
            },
            tabBarItemStyle: {
                margin: 10,
                borderRadius: 15,
                padding: 5,
            },
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="card"
                options={{
                    title: 'Card',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="credit-card" color={color} />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="transfers"
                options={{
                    title: 'Transfers',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="exchange" color={color} />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: 'Account',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}