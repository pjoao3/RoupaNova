import React from 'react';
import { Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';



export const RegisterScreenm = () => {
    return(
        <SafeAreaView>
            <ScrollView>
                <Appbar>
                    <Appbar.BackAction/>
                    <Appbar.Content title='Resgistar'/>
                </Appbar>
                <TextInput label='Nome'/>
                <TextInput label='Email' keyboardType='email-address'/>
                <TextInput label='Senha' secureTextRntry={true} right={<TextInput.Incon name='eye-off-outline'/>} />
                <TextInput label='Confirmar Senha' secureTextRntry={true} right={<TextInput.Incon name='eye-off-outline'/>} />
                <TextInput label='Número de Telefone' keybordType='phone-pad'/>
                <Button mode='contained'>Registrar</Button>
            </ScrollView>
        </SafeAreaView>
    );

}