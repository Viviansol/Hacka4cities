import React from 'react';
import {View, Container} from './styles';
import {Text} from 'reac-native';
import {Capivara} from '../../assets/capybara 2.svg'
import {Predios} from '../../assets/Illustration(1).svg'
import styles from './style.js';
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

export default() =>{
    const navigation = useNavigation();
    useEffect(()=>{
        const checkToken = async()=>{
            const token = await AsyncStorage.getItem('token')
            if(token){

            }else{
                navigation.navigate('SignIn')
            }
        }  
        checkToken();
    }, []);

    return(
        <SafeAreaView>
            <View style={styles.container}>
        <View style={styles.title}>
                <Text style={{color: '#FFFFFF' }}>
                    Kapix
                </Text>
                <Capivara />
        </View>
        <View>
            <Predios style={styles.predio}/>
        </View>
        </View>
        </SafeAreaView>
    )

}