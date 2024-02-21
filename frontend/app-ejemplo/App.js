import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation';
import React, { useEffect, useState } from 'react';

export default function App() {
    const [splashVisible, setSplashVisible] = useState(true);

    useEffect(() => {
        // Simulación de tiempo de espera (3 segundos)
        setTimeout(() => {
            // Ocultar el splash screen después de 3 segundos
            setSplashVisible(false);
        }, 3000);
    }, []);

    return (
        <>
            {splashVisible ? (
                // Splash screen
                <View style={styles.container}>
                    <Image
                        source={require('./assets/images/splash2.png')} // Ruta de la imagen de la pantalla de bienvenida
                        style={styles.logo}
                    />
                </View>
            ) : (
                // Aplicación principal
                <NavigationContainer>
                    <Navigation />
                </NavigationContainer>
            )}
            <StatusBar style="auto" />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black', // Puedes ajustar el color de fondo del splash screen según tus preferencias
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain', // Ajusta el modo de redimensionamiento según tus necesidades
    },
});
