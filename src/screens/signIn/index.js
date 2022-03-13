import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './style.js';
import {Illustration} from '../../assets/Illustration.svg'

export default function Login({ navigation }) {



    async function handleSubmit(){
        navigation.navigate('HomeScreen');
    }

    


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Illustration/>
                </View>
                <View>
                    <Text>Login</Text>
                    <Text>Faça Login na sua conta</Text>
                    <View style={styles.botoes}>
                    <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                        <Text style={styles.buttonF}>Entrar com o facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                        <Text style={styles.buttonG}>Entrar com o Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                        <Text style={styles.buttonA}>Entrar com Apple</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>


        </SafeAreaView>
    )
}