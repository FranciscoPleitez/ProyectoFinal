import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen({ navigation }) {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        const success = await login(email, password);
        if (!success) {
            Alert.alert('Error', 'Credenciales incorrectas');
            return;
        }

        // ¡No es necesario hacer navigation.navigate! AppNavigator detecta el user
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inicio de Sesión</Text>
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
            />
            <Button title="Iniciar Sesión" onPress={handleLogin} color="#007bff" />
            <View style={{ marginTop: 10 }}>
                <Button
                    title="¿No tienes cuenta? Regístrate"
                    onPress={() => navigation.navigate('Register')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 22, textAlign: 'center', marginBottom: 20 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 5, borderRadius: 5 }
});
