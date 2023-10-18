import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export function PasswordItem({data, removePassword}) {
    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <View style={styles.textHider}>
                <Text style={styles.text}>{data}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0e0e0e',
        padding: 14,
        width: '100%',
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})