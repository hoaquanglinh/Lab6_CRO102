import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Dem = () => {
    const [count, setCount] = useState(0)
    const tang = () => {
        setCount(count + 1)
    }
    return (
        <View>
            <Text>Số lần click: {count}</Text>
            <Button title='Tăng số' onPress={tang}/>
        </View>
    )
}

export default Dem

const styles = StyleSheet.create({})