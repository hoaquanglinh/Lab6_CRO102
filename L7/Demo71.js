import { TextInput, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { FIRESTORE_DB } from '../firebaseConfig'

const Demo71 = () => {
    const [text, setText] = useState('')
    const handleInsert = async () => {
        try{
            const tailieu = await addDoc(collection(FIRESTORE_DB, 'SinhVien'), {
                text: text, 
            });
            console.log('Tai lieu duoc ghi voi ID = ', tailieu.id);
            setText('');
        }catch(err){
            console.error("Loi ghi du lieu: " + err);
        }
    }
    return (
        <View>
            <TextInput placeholder='Nhap ten sinh vien'
                onChangeText={txt => setText(txt)}/>
            <Button title='Them du lieu' onPress={handleInsert}/>
        </View>
    )
}

export default Demo71

const styles = StyleSheet.create({})