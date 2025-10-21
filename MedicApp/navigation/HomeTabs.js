import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';

// Pantallas temporales
import { View, Text } from 'react-native';
function ConsultasScreen() {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Consultas</Text></View>;
}
function ComunicacionScreen() {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Comunicacion</Text></View>;
}
function ForoScreen() {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Foro</Text></View>;
}

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') iconName = 'home-outline';
                    else if (route.name === 'Consultas') iconName = 'medkit-outline';
                    else if (route.name === 'Comunicacion') iconName = 'chatbubble-outline';
                    else if (route.name === 'Foro') iconName = 'people-outline';
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#007bff',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Consultas" component={ConsultasScreen} />
            <Tab.Screen name="Comunicacion" component={ComunicacionScreen} />
            <Tab.Screen name="Foro" component={ForoScreen} />
        </Tab.Navigator>
    );
}
