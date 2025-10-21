import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function ProfileScreen() {
    const { user, logout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil del Usuario</Text>
            <Text>Nombre: {user?.name}</Text>
            <Text>Correo: {user?.email}</Text>
            <Text>Datos Médicos: {user?.medicalData || 'No registrado'}</Text>
            <Button title="Cerrar sesión" onPress={logout} color="#dc3545" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 22, textAlign: 'center', marginBottom: 20 }
});
