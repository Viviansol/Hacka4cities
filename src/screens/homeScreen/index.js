import React from 'react';
import { Map } from '../..assets/image 2.svg'
import styles from './styles';
export default function HomeScreen({ navigation }) {

    async function handleSubmit(){
        navigation.navigate('HomeScreen2');
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Map style={styles.map}/>
            </View>
            <View style={styles.containerLoc}>
                    <Text style={styles.title}>
                        KapiX
                    </Text>
                    <Text style={style.message}>
                        Compartilhe sua localização com o app.
                    </Text>
                    <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                        <Text style={styles.buttonA}>Localização</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                        <Text style={styles.buttonB}>Cancelar</Text>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}