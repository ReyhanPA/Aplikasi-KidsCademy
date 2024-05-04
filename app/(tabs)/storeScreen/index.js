import React from "react";
import { View, Text, Image } from "react-native";

const StoreScreen = () => {
  return (
    <View className="flex flex-column">
      <View className="h-1/6 ">
        <Text className="text-2xl py-5 text-center font-bold">Store</Text>
      </View>
      <View className="h-1/6 items-center justify-center ">
        <CardWarning
          title="Energimu Habis"
          content="kamu bisa mengisinya dengan membeli atau menunggu 10 energi tambahan setiap 30 menit."
        />
      </View>
      <View className="h-4/6 flex-wrap items-center justify-center flex-row">
        <StoreItemCard title="200" desc="Rp. 15.000" />
        <StoreItemCard title="150" desc="Rp. 13.500" />
        <StoreItemCard title="100" desc="Rp. 10.000" />
        <StoreItemCard title="50" desc="Rp. 5.000" />
        <View className="rounded-full w-60 h-15 bg-white shadow-md p-4">
          <Text className="text-lg text-center font-bold">Ke Pembayaran</Text>
        </View>
      </View>
    </View>
  );
};

const StoreItemCard = ({ title, img, desc }) => {
  return (
    <View className="w-48 h-48 mx-8 my-8 bg-white border-solid border-4 border-gray-300 rounded-3xl items-center p-4">
      <Image
        className="w-20 h-20"
        source={require("../../../assets/Images/energystore.png")}
      />
      <Text className="text-2xl font-bold mb-2">{title}</Text>
      <Text className="text-gray-600 text-lg text-center">{desc}</Text>
    </View>
  );
};

const CardWarning = ({ title, content }) => {
  return (
    <View className="w-96 bg-yellow-500 h-40 mx-16 my-8 rounded-lg border-solid border-4 border-yellow-600 p-4">
      <Text className="text-lg text-center font-bold mb-2">{title}</Text>
      <Text className="text-black text-lg text-center">{content}</Text>
      <View className="w-10 mx-8 my-32 before:block before:absolute bg-yellow-200 h-3 rounded-lg"></View>
      <View className="w-10 mx-48 my-1 before:block before:absolute bg-yellow-200 h-3 rounded-lg"></View>
      <View className="w-10 mx-72 my-10 before:block before:absolute bg-yellow-200 h-3 rounded-lg"></View>
    </View>
  );
};

export default StoreScreen;
