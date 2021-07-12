import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Image, View, TouchableOpacity } from "react-native";
import LoginImage from "../../../assets/logo.png";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const BemVindo: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}
    >
      <View
        style={{
          height: getStatusBarHeight() + 35,
          backgroundColor: "#8c52ff",
        }}
      />
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
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              borderRadius: 5,
              borderColor: "white",
              borderWidth: 1,
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", marginVertical: 10 }}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Cadastro")}
            style={{
              marginTop: 15,
              borderRadius: 5,
              borderColor: "white",
              borderWidth: 1,
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", marginVertical: 10 }}>
              Cadastrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BemVindo;
