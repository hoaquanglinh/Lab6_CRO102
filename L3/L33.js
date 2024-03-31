import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function L33() {
    const [expanded, setexpanded] = useState(false)
    const [animation] = useState(new Animated.Value(60)); // chieu cao ban dau header

    const thaydoiHeader = () => {
        const initialValue = expanded ? 200 : 60
        const finalValue = expanded ? 60: 200
        setexpanded(!expanded)
        Animated.spring(animation, {
            toValue: finalValue,
            useNativeDriver: false
        }).start();
    }
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.header, {height: animation}]}>
                <Text style={styles.headerText}>Mở rộng header</Text>
            </Animated.View>

            <TouchableOpacity onPress={thaydoiHeader} style={styles.button}>
                <Text>{expanded ? 'Thu hẹp' : 'Mở rộng'}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    
    header: {
        width: '100%',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'cyan'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})