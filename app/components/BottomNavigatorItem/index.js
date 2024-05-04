import React from "react";
import { TouchableOpacity, Image, View } from "react-native";

const BottomNavigatorItem = ({ label, isFocused, onPress, onLongPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={{ flex: 1 }}
      className="items-center justify-center"
    >
      {label === "Dashboard" && ( isFocused ? (
        <View className="flex h-full items-center justify-center relative">
          <View className="before:w-16 before:h-1 before:absolute before:-top-3 before:bg-[#1A8EFD]"></View>
          <Image source={require('../../../assets/Icons/dashboard.png')} className="w-6 h-6"/>
        </View>
      ) : (       
        <Image source={require('../../../assets/Icons/dashboard.png')} className="w-6 h-6"/>
      ))}
      {label === "Library" && ( isFocused ? (
        <View className="flex h-full items-center justify-center relative">
          <View className="before:w-16 before:h-1 before:absolute before:-top-3 before:bg-[#1A8EFD]"></View>
          <Image source={require('../../../assets/Icons/library.png')} className="w-6 h-6"/>
        </View>
      ) : (       
        <Image source={require('../../../assets/Icons/library.png')} className="w-6 h-6"/>
      ))}
      {label === "Store" && ( isFocused ? (
        <View className="flex h-full items-center justify-center relative">
          <View className="before:w-16 before:h-1 before:absolute before:-top-3 before:bg-[#1A8EFD]"></View>
          <Image source={require('../../../assets/Icons/store.png')} className="w-6 h-6"/>
        </View>
      ) : (       
        <Image source={require('../../../assets/Icons/store.png')} className="w-6 h-6"/>
      ))}
      {label === "Profile" && ( isFocused ? (
        <View className="flex h-full items-center justify-center relative">
          <View className="before:w-16 before:h-1 before:absolute before:-top-3 before:bg-[#1A8EFD]"></View>
          <Image source={require('../../../assets/Icons/profile.png')} className="w-6 h-6"/>
        </View>
      ) : (       
        <Image source={require('../../../assets/Icons/profile.png')} className="w-6 h-6"/>
      ))}
    </TouchableOpacity>
  );
};

export default BottomNavigatorItem;
