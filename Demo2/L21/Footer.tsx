import React from "react";
import { Text,View } from "react-native";
const Footer=({info}:{info:string})=>{
    return(
        <View>
            <Text>{info}</Text>
        </View>
    );
}
export default Footer;