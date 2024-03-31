// setFocus => click vào button thì sẽ focus vào input
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef } from 'react'

const MyComponent = () => {
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();
    }
    return (
        <View>
            <TextInput ref={inputRef}/>
            <Button title='Focus Input' onPress={focusInput}/>
        </View>
    )
}

export default MyComponent

const styles = StyleSheet.create({})