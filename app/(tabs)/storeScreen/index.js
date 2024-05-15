import React, { useState } from "react";
import { View, Text, Image, TouchableHighlight, Alert } from "react-native";
import { IconDoubleElecttrify } from "../../../assets/icon";

const StoreScreen = () => {
  var energi = 100;
  return (
    <View className="flex flex-column">
      <View className="h-2/6 items-center justify-center">
        <Text className="text-2xl mt-20 py-1 text-center font-bold">Store</Text>
        {energi < 90 ? (
          <CardWarning
            isEnoughEnergy={false}
            title="Energimu Habis"
            content="kamu bisa mengisinya dengan membeli atau menunggu 10 energi tambahan setiap 30 menit."
          />
        ) : (
          <CardWarning
            isEnoughEnergy={true}
            title="Energimu masih ada"
            content="Selamat bermain dan jangan lupa mengisinya saat energimu mulai habis ya!"
          />
        )}
        <View className="flex-row">
          <StoreStats title="0" desc="Energi" />
          <StoreStats title="Rp.100.000" desc="Saldo" />
        </View>
      </View>
      <View className="h-4/6 mt-8 flex-wrap items-center justify-center flex-row">
        <StoreItemCard title="200" desc="Rp. 15.000" />
        <StoreItemCard title="150" desc="Rp. 13.500" />
        <StoreItemCard title="100" desc="Rp. 10.000" />
        <StoreItemCard title="50" desc="Rp. 5.000" />
        <View className="rounded-full w-48 h-12 bg-blue-500 shadow-md justify-center">
          <Text className="text-md text-center text-white font-bold">
            Ke Pembayaran
          </Text>
        </View>
      </View>
    </View>
  );
};

const StoreStats = ({ title, desc }) => {
  return (
    <View className="w-32 h-16 mx-8 my-2 bg-blue-500 rounded-2xl justify-center pl-4">
      <Text className="text-white text-md font-bold">{title}</Text>
      <Text className="text-yellow-100 text-sm">{desc}</Text>
    </View>
  );
};

const StoreItemCard = ({ title, desc }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed);
  };
  return (
    <View>
      <TouchableHighlight onPress={handlePress} underlayColor="transparent">
        <View
          className={`w-32 h-32 mx-8 my-8 bg-white border-solid border-2 rounded-2xl items-center ${
            isPressed ? "border-green-500" : "border-slate-400"
          }`}
        >
          <IconDoubleElecttrify height={60} width={60} />
          <Text className="text-lg font-bold">{title}</Text>
          <Text className="text-gray-600 text-md text-center">{desc}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const CardWarning = ({ title, content, isEnoughEnergy }) => {
  return (
    <View
      className={`w-72 h-32 mx-16 my-4 rounded-3xl border-solid border-4 border-yellow-600 p-4 ${
        isEnoughEnergy
          ? "bg-blue-300 border-blue-500"
          : "bg-yellow-500 border-yellow-600"
      }`}
    >
      <Text className="text-xl text-center font-bold mb-2">{title}</Text>
      <Text className="text-black text-md text-center">{content}</Text>
      <View className="w-4 mx-4 my-24 before:block before:absolute bg-yellow-200 h-2 rounded-lg"></View>
      <View className="w-5 mx-48 my-1 before:block before:absolute bg-yellow-100 h-2 rounded-lg"></View>
      <View className="w-10 mx-56 my-10 before:block before:absolute bg-yellow-300 h-4 rounded-lg"></View>
    </View>
  );
};

export default StoreScreen;
