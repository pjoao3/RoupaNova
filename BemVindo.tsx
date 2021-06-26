import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button } from 'react-native';
import { Text, Image, View, TextInput, TouchableOpacity } from 'react-native';

export default function BemVindo() {
    const navigation = useNavigation();
    const [usuario, setUsuario] = useState<User>({ login: "", senha: "" });
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ height: 35, backgroundColor: '#8c52ff' }} />
            <View style={{ height: 300, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center' }}>
                <Image source={ require('./assets/logo.png') } style={{ width: 300, height: 300, alignContent: 'center' }}></Image>
            </View>
            <View style={{ flex: 1, backgroundColor: '#8c52ff', padding: 30, borderRadius: 30, marginHorizontal:10, marginBottom:10, justifyContent: 'center', alignContent: 'center'}} >
                
                <View style={{marginTop: 20, alignItems:'center'}}>
                    <TouchableOpacity  onPressOut={()=> navigation.navigate('Login')} style={{borderRadius:5, borderColor: 'white', borderWidth: 1, width:'50%',  justifyContent: 'center', alignItems:'center'}} onPress={() => { navigation.navigate('Home', usuario) }} >
                        <Text style={{color: 'white', marginVertical:10}}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity   style={{marginTop:15, borderRadius:5, borderColor: 'white', borderWidth: 1, width:'50%',  justifyContent: 'center', alignItems:'center'}} onPress={() => { navigation.navigate('Home', usuario) }} >
                        <Text style={{color: 'white', marginVertical:10}}>Cadastrar</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>);
}