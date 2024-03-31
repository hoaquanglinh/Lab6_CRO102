import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../L21/Header';
import Footer from '../L21/Footer';
import Body from '../L21/Body';

const Main = () => {
    const [footerInfo, setFooterInfo] = useState('');
    const handleSubmit = (inputValue: string) => {
        setFooterInfo(inputValue);
    };

    return (
        <View>
            <Header />
            <Body onSubmit={handleSubmit} />
            <Footer info={footerInfo} />
        </View>
    );
};

export default Main;

const styles = StyleSheet.create({
    
});
