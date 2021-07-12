import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Form } from "@unform/mobile";
import { FormHandles } from '@unform/core';
import { StyleSheet, ScrollView, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Appbar, Button } from "react-native-paper";
import Input from "../../components/Input";
import * as Yup from 'yup';
import getValidationErrors from "../../tools/getValidationErrors";
import UserDTO from "../../DTOs/UserDTO";

type FormProps = UserDTO;

export default function Redefinir() {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: FormProps) {
    formRef.current?.setErrors({});

    try {
      const schema = Yup.object().shape({
        email: Yup.string().email("Email inválido").required("Email obrigatório"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      navigation.navigate("Produtos", data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Appbar
          style={{
            paddingTop: getStatusBarHeight(),
            height: getStatusBarHeight() + 70,
            backgroundColor: "#8c52ff",
          }}
        >
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Redefinir Senha" />
        </Appbar>
        <Form ref={formRef} onSubmit={handleSubmit}>

          <Input
            name="email"
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#8c52ff"
            keyboardType="email-address"
          />
          <Button
            mode="contained"
            style={{
              backgroundColor: "#8c52ff",
              marginTop: 50,
              marginHorizontal: 15,
              paddingVertical: 8,
            }}
            onPress={() => formRef.current?.submitForm()}
          >
            Redefinir
          </Button>
        </Form>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input : {
    borderRadius: 5,
    marginTop: 15,
    borderColor: "#8c52ff",
    borderWidth: 1,
    paddingVertical: 8,
    fontSize: 18,
    paddingHorizontal: 5,
    marginHorizontal: 15,
  }
});
