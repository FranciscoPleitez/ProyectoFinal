import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Cargar usuario guardado
    useEffect(() => {
        const loadUser = async () => {
            const savedUser = await AsyncStorage.getItem('user');
            if (savedUser) setUser(JSON.parse(savedUser));
        };
        loadUser();
    }, []);

    const register = async (name, email, password, medicalData) => {
        const newUser = { name, email, password, medicalData };
        await AsyncStorage.setItem('user', JSON.stringify(newUser));
        setUser(newUser);
    };

    const login = async (email, password) => {
        const savedUser = await AsyncStorage.getItem('user');
        if (savedUser) {
            const userData = JSON.parse(savedUser);
            if (userData.email === email && userData.password === password) {
                setUser(userData);
                return true;
            }
        }
        return false;
    };

    const logout = async () => {
        await AsyncStorage.removeItem('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
