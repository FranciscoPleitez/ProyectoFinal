import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function RegisterScreen({ navigation }) {
    const { register } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [medicalData, setMedicalData] = useState('');

    const handleRegister = () => {
        if (!name || !email || !password) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }
        register(name, email, password, medicalData);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de Usuario</Text>
            <TextInput style={styles.input} placeholder="Nombre completo" onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Correo electrónico" onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry onChangeText={setPassword} />
            <TextInput style={styles.input} placeholder="Datos médicos (opcional)" onChangeText={setMedicalData} />
            <Button title="Registrar" onPress={handleRegister} color="#007bff" />
            <Button title="¿Ya tienes cuenta? Inicia sesión" onPress={() => navigation.navigate('Iniciar Sesión')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 22, textAlign: 'center', marginBottom: 20 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 5, borderRadius: 5 }
});
