import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const LT23 = () => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        // Hàm được gọi sau mỗi lần render
        console.log("có thay đổi giá trị")
    })

    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title='Tăng' onPress={() => setCount(count + 1)}/>
        </View>
    )
}


export default LT23

const styles = StyleSheet.create({})