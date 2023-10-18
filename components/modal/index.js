import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard';
import useStorage from '../../hooks/useStorage';

export function ModalPassword({password, handleClose, getAnotherPassword}) {
    const { saveItem } = useStorage();

    async function handleCopyPassword () {
        await Clipboard.setStringAsync(password);
        pass = await Clipboard.getStringAsync();

        await saveItem('@pass', password);
        
        alert('Senha copiada com sucesso!');
        handleClose();
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>
                <Pressable style={styles.passwordContainer} onPress={getAnotherPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.password}>{password}</Text>
                </Pressable>
                
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: '#fff',
        width: '80%',
        borderRadius: 8,
        padding: 24,
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24
    },
    passwordContainer: {
        backgroundColor: '#0e0e0e',
        width: '100%',
        padding: 12,
        borderRadius: 8,
        marginBottom: 24
    },
    password: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 8
    },
    button: {
        width: '48%',
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    buttonSave: {
        backgroundColor: '#392de9',
    },
    buttonSaveText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold'
    }
})