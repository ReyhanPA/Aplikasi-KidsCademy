import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { IconDoubleElecttrify } from "../../../assets/icon";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  {
    id: 1,
    energi: 200,
    harga: "15.000",
  },
  {
    id: 2,
    energi: 150,
    harga: "13.500",
  },
  {
    id: 3,
    energi: 100,
    harga: "10.000",
  },
  {
    id: 4,
    energi: 50,
    harga: "5.000",
  },
];

const StoreStats = ({ title, desc }) => {
  return (
    <View className="w-32 h-16 mx-8 my-2 bg-[#EFF9FF] border-solid border-2 border-slate-400 rounded-2xl justify-center pl-4">
      <Text className="text-black text-md font-bold">{title}</Text>
      <Text className="text-slate-500 text-sm">{desc}</Text>
    </View>
  );
};

const StoreItemCard = ({ id, title, desc }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <View key={id}>
      <TouchableOpacity onPress={handlePress} underlayColor="transparent">
        <View className="w-32 h-32 mx-8 my-8 bg-white border-solid border-2 rounded-2xl items-center">
          <IconDoubleElecttrify height={60} width={60} />
          <Text className="text-lg font-bold">{title}</Text>
          <Text className="text-gray-600 text-md text-center">Rp {desc}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const CardWarning = ({ title, content, isEnoughEnergy }) => {
  return (
    <View className={`w-72 h-32 mx-16 my-4 rounded-3xl border-solid border-4 border-yellow-600 p-4 ${isEnoughEnergy ? "bg-blue-300 border-blue-500" : "bg-yellow-500 border-yellow-600"}`}>
      <Text className="text-xl text-center font-bold mb-2">{title}</Text>
      <Text className="text-black text-md text-center">{content}</Text>
      <View className="w-4 mx-4 my-24 before:block before:absolute bg-yellow-200 h-2 rounded-lg"></View>
      <View className="w-5 mx-48 my-1 before:block before:absolute bg-yellow-100 h-2 rounded-lg"></View>
      <View className="w-10 mx-56 my-10 before:block before:absolute bg-yellow-300 h-4 rounded-lg"></View>
    </View>
  );
};

const StoreScreen = () => {
  var energi = 70;

  return (
    <SafeAreaView className="flex py-2 bg-white flex-column">
      <View className="h-2/6" dir="ltr">
        <Text className="text-xl mx-4 my-2 font-semibold text-black">Store</Text>
        <View className="flex justify-center items-center">
          {energi < 90 ? (
            <CardWarning isEnoughEnergy={false} title="Energimu Habis" content="kamu bisa mengisinya dengan membeli atau menunggu 10 energi tambahan setiap 30 menit." />
          ) : (
            <CardWarning isEnoughEnergy={true} title="Energimu masih ada" content="Selamat bermain dan jangan lupa mengisinya saat energimu mulai habis ya!" />
          )}
        </View>
        <View className="flex-row justify-center items-center">
          <StoreStats title="0" desc="Energi" />
          <StoreStats title="Rp.100.000" desc="Saldo" />
        </View>
      </View>
      <View className="h-4/6 mt-8 flex-wrap items-center justify-center flex-row">
        {data.map((item) => (
          <StoreItemCard key={item.id} id={item.id} title={item.energi} desc={item.harga} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default StoreScreen;
