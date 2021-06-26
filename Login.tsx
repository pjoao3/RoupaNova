import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, Image, View, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
    const navigation = useNavigation();
    const [usuario, setUsuario] = useState<User>({ login: "", senha: "" });
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ height: 35, backgroundColor: '#8c52ff' }} />
            <View style={{ height: 300, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center' }}>
                <Image source={ require('./assets/logo.png') } style={{ width: 300, height: 300, alignContent: 'center' }}></Image>
            </View>
            <View style={{ flex: 1, backgroundColor: '#8c52ff', padding: 30, borderRadius: 30, marginHorizontal:10, marginBottom:10, justifyContent: 'center', alignContent: 'center'}} >
                <View>
                   
                    <View >
                        <TextInput
                        placeholder='Login' 
                        placeholderTextColor='#8c52ff'
                        
                            style={{
                                textAlign: 'center',
                                borderRadius: 5,
                                backgroundColor: 'white',
                                height: 30,
                                borderColor: 'navy',
                                borderWidth: 1,
                                padding: 5
                            }} defaultValue='' onChangeText={(text) => { usuario.login = text; }}>
                        </TextInput>
                    </View>
                </View>
                <View >
                   
                    <View >
                        <TextInput
                        placeholder='Senha' 
                        placeholderTextColor='#8c52ff'
                            style={{
                                textAlign: 'center',
                                marginTop: 10,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                height: 30,
                                borderColor: 'navy',
                                borderWidth: 1,
                                padding: 5
                            }} defaultValue=''
                        />
                    </View>
                </View>
                <View style={{marginTop: 20, alignItems:'center'}}>
                    <TouchableOpacity   style={{borderRadius:5, borderColor: 'white', borderWidth: 1, width:'50%',  justifyContent: 'center', alignItems:'center'}} onPress={() => { navigation.navigate('Home', usuario) }} >
                        <Text style={{color: 'white', marginVertical:10}}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity   style={{marginTop:10, justifyContent: 'center', alignItems:'center'}} onPress={() => { navigation.navigate('Home', usuario) }} >
                        <Text style={{color: 'white', marginVertical:10}}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
