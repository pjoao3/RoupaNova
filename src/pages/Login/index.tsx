import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, Image, View, TextInput, TouchableOpacity } from "react-native";
import UserDTO from "../../DTOs/UserDTO";
import LoginImage from "../../../assets/logo.png";
import { Appbar } from "react-native-paper";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Appbar
        style={{
          paddingTop: getStatusBarHeight(),
          height: getStatusBarHeight() + 70,
          backgroundColor: "#8c52ff",
        }}
      >
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Login" />
      </Appbar>
      <View
        style={{
          height: 300,
          flexDirection: "row",
          backgroundColor: "white",
          justifyContent: "center",
        }}
      >
        <Image
          source={LoginImage}
          style={{ width: 300, height: 300, alignContent: "center" }}
        ></Image>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#8c52ff",
          padding: 30,
          borderRadius: 30,
          marginHorizontal: 10,
          marginBottom: 10,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View>
          <View>
            <TextInput
              placeholder="Login"
              placeholderTextColor="#8c52ff"
              style={{
                textAlign: "center",
                borderRadius: 5,
                backgroundColor: "white",
                height: 30,
                borderColor: "navy",
                borderWidth: 1,
                padding: 5,
              }}
            ></TextInput>
          </View>
        </View>
        <View>
          <View>
            <TextInput
              placeholder="Senha"
              placeholderTextColor="#8c52ff"
              secureTextEntry={true}
              style={{
                textAlign: "center",
                marginTop: 10,
                borderRadius: 5,
                backgroundColor: "white",
                height: 30,
                borderColor: "navy",
                borderWidth: 1,
                padding: 5,
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <TouchableOpacity
            style={{
              borderRadius: 5,
              borderColor: "white",
              borderWidth: 1,
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              navigation.navigate("Produtos");
            }}
          >
            <Text style={{ color: "white", marginVertical: 10 }}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              navigation.navigate("Redefinir");
            }}
          >
            <Text style={{ color: "white", marginVertical: 10 }}>
              Esqueci minha senha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
