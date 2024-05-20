import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { router } from 'expo-router';
import { IconNoImage, IconLetterA, IconLetterX, IconLetterY, IconAnimal, IconFruit, IconDragon, IconAddition, IconBasicLogic, IconBasketball } from "../../../assets/icon";
const MaterialBody = ({ material }) => {
    return (
        <ScrollView className="flex-1 h-full w-full bg-white px-4 ">
          <Text className="text-xl font-semibold text-black mb-4">Konten {material}</Text>
        </ScrollView>
    );
  };
  
  export default MaterialBody;