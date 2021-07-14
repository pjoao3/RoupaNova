import React from "react";
import { View, FlatList, Text, Image } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Roupa1 from "../../../assets/roupa1.png";
import Roupa2 from "../../../assets/roupa2.png";
import Roupa3 from "../../../assets/roupa3.png";
import Roupa4 from "../../../assets/roupa4.png";
import Roupa5 from "../../../assets/roupa5.png";

const DATA = [
  {
    id: 1,
    image: Roupa1,
    title: "Camiseta Masculina",
    description: "Camiseta masculina de manga curta estampa paisagem",
    price: "R$ 68,00",
    date: "11/07/2021",
  },
  {
    id: 2,
    image: Roupa2,
    title: "Camistas Masculina",
    description: "Kit 6 Camisetas Slim Fit Masculinas Básicas Lisas Novastreet",
    price: "R$ 159,00",
    date: "11/07/2021",
  },
  {
    id: 3,
    image: Roupa3,
    title: "Bermudas Masculina",
    description: "Bermuda Masculina, azul bebê",
    price: "R$ 75,00",
    date: "11/07/2021",
  },
  {
    id: 4,
    image: Roupa4,
    title: "Bermuda Masculina",
    description: "Bermuda Masculina Sarja Bolsos MR",
    price: "R$ 80,00",
    date: "11/07/2021",
  },

  {
    id: 6,
    image: Roupa5,
    title: "Calça Jeans",
    description: "Calça Jeans Skinny Masculina - (Castanho)",
    price: "R$ 110,00",
    date: "11/07/2021",
  },
];

const Item = ({ item }: unknown): any => (
  <>
    <View style={{ height: 150, marginTop: 15, flexDirection: "row" }}>
      <Image
        source={item.image}
        style={{ height: 150, width: 150, borderRadius: 15 }}
      />
      <View style={{ flex: 1, paddingLeft: 10 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 5,
            color: "#8c52ff",
            marginRight: 15,
          }}
        >
          {item.title}
        </Text>
        <Text style={{ color: "#8c52ff", marginRight: 15 }}>
          {item.description}
        </Text>
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            fontWeight: "bold",
            color: "#8c52ff",
            marginRight: 15,
          }}
        >
          {item.price}
        </Text>
        <Text style={{ color: "#8c52ff", marginRight: 15 }}>{item.date}</Text>
      </View>
    </View>
    <View
      style={{
        height: 1,
        backgroundColor: "#8c52ff",
        marginTop: 15,
        marginRight: 15,
      }}
    />
  </>
);

const Produtos: React.FC<any> = ({ route }) => {
  const nome = route?.params?.nome ? route?.params?.nome : "";

  return (
    <>
      <View
        style={{
          height: getStatusBarHeight() + 15,
          backgroundColor: "#8c52ff",
        }}
      />

      <View style={{ flex: 1, paddingLeft: 15, backgroundColor: "white" }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            marginTop: 32,
            color: "#8c52ff",
          }}
        >
          Olá{nome ? `, ${nome}` : ""}!
        </Text>
        <Text style={{ fontSize: 18, color: "#8c52ff", marginBottom: 15 }}>
          Conheça os nosso produtos abaixo:
        </Text>
        <FlatList
          data={DATA}
          renderItem={Item}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    </>
  );
};

export default Produtos;
