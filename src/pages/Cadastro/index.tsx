import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import { StyleSheet, ScrollView, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Appbar, Button } from "react-native-paper";
import * as Yup from "yup";
import Input from "../../components/Input";
import getValidationErrors from "../../tools/getValidationErrors";
import UserDTO from "../../DTOs/UserDTO";

type FormProps = UserDTO;

export default function Cadastro() {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: FormProps) {
    formRef.current?.setErrors({});

    try {
      const schema = Yup.object().shape({
        nome: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .email("Email inválido")
          .required("Email obrigatório"),
        senha: Yup.string().min(8, "Senha minima de 8 caracteres"),
        confirmarsenha: Yup.string()
          .required("Confirmação de senha obrigatória")
          .oneOf(
            [Yup.ref("senha"), null],
            "A senha precisa ser igual nos dois campos"
          ),
        telefone: Yup.string().required("Telefone obrigatório"),
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
          <Appbar.Content title="Registrar" />
        </Appbar>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="nome"
            placeholder="Nome"
            placeholderTextColor="#8c52ff"
          />
          <Input
            name="email"
            placeholder="Email"
            placeholderTextColor="#8c52ff"
            keyboardType="email-address"
          />
          <Input
            name="senha"
            placeholder="Senha"
            placeholderTextColor="#8c52ff"
            secureTextEntry
          />
          <Input
            name="confirmarsenha"
            placeholder="Confirmar Senha"
            placeholderTextColor="#8c52ff"
            secureTextEntry
          />
          <Input
            name="telefone"
            placeholder="Número de Telefone"
            placeholderTextColor="#8c52ff"
            keyboardType="phone-pad"
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
            Registrar
          </Button>
        </Form>
      </ScrollView>
    </View>
  );
}
