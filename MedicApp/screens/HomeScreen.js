import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function HomeScreen() {
    const { user, logout } = useContext(AuthContext);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Bienvenido, {user?.name}!</Text>
            <View style={styles.card}>
                <Text style={styles.label}>Correo:</Text>
                <Text style={styles.value}>{user?.email}</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.label}>Datos Médicos:</Text>
                <Text style={styles.value}>{user?.medicalData || 'No registrado'}</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <Button title="Cerrar sesión" onPress={logout} color="#dc3545" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    card: {
        width: '100%',
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 10,
        marginVertical: 5
    },
    label: { fontWeight: 'bold', fontSize: 16 },
    value: { fontSize: 16, marginTop: 5 }
});
