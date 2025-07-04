import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import HomeIcon from '../../assets/icons/home.svg'
import CardIcon from '../../assets/icons/card.svg'
import SwitchIcon from '../../assets/icons/Horizontal_switch_light.svg'
import UserIcon from '../../assets/icons/User_light.svg'

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveBackgroundColor: '#1A1A41',
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                backgroundColor: '#0E1032',
                height: 84,
                borderTopWidth: 0.2,
                borderTopColor: '#1f2937',
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
                    tabBarIcon: () => <HomeIcon width={24} height={24} />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="card"
                options={{
                    title: 'Card',
                    tabBarIcon: () => <CardIcon width={24} height={24} />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="transfers"
                options={{
                    title: 'Transfers',
                    tabBarIcon: () => <SwitchIcon width={24} height={24} />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: 'Account',
                    tabBarIcon: () => <UserIcon width={24} height={24} />,
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}