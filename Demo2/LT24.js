import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'

const ChildComponent = ({onclick}) => {
  return <Button onPress={onclick} title='Click me' />
}

const ParentComponent = () => {
    const [count, setcount] = useState(0);
    const handleClick = useCallback(()=>{
        setcount(count+1)
    }, [count])
    return(
        <View>
            <Text>Count: {count}</Text>
            <ChildComponent onclick={handleClick} />
        </View>
    )
}

export default ParentComponent

const styles = StyleSheet.create({})