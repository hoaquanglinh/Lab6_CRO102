import React,{useState,useRef,useEffect} from "react";
import { Text,View,Animated,StyleSheet,Dimensions } from "react-native";
const CRO31 = () =>{
    const position=useRef(new Animated.ValueXY()).current;//lay vi tri hien tai
    const windowHeight= Dimensions.get('window').height;//lay chieu cao
    useEffect(()=>{
        startAnimation();
    });
    const startAnimation=()=>{
        const randomY=Math.floor(Math.random()*windowHeight);//vi tri bat ky theo Y
        Animated.timing(position,{
            toValue: {x:0,y:randomY},
            duration: 3000,
            useNativeDriver: false, /// sua true false
        }).start(()=>startAnimation());//lap di lap lai
    };
    return(
        <View style={styles.container}>
            <Animated.View style={[styles.box, position.getLayout()]} />
        </View>
    );
   
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    box:{
        width:50,
        height:50,
        backgroundColor:'red',
    },
});
export default CRO31;