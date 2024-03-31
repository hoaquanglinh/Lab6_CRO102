import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Audio } from 'expo-av';

export default function NgheNhac() {
    const [sound, setSound] = useState(null);

    // Hàm để phát nhạc
    const play = async () => {
        const { sound } = await Audio.Sound.createAsync(
            { uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }
        );
        setSound(sound);
        await sound.playAsync();
    };

    // Hàm để tạm dừng nhạc
    async function pause() {
        if (sound) {
            await sound.stopAsync();
        }
    }

    return (
            <View style={styles.container}>
                <Text style={styles.title}>Ví dụ về việc phát nhạc</Text>
                <View>
                    <TouchableOpacity style={styles.button} onPressOut={play}>
                        <Text>Phát</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}  onPress={pause}>
                        <Text>Tạm dừng</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    title:{
        fontSize: 30,
        marginBottom: 30
    },
    buttons: {
        flexDirection: 'row'
    },
    button:{
        backgroundColor: 'blue',
        paddingHorizontal: 10
    },
    buttonText:{

    }
});
