import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

const Body = ({ onSubmit }: { onSubmit: (inputValue: string) => void }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <View>
            <Text>Input:</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={setInputValue}
                value={inputValue}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default Body;
