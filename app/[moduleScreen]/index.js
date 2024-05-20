import React from "react";
import { View,Text } from "react-native";
import { useRoute } from '@react-navigation/native';
const ModuleScreen = () => {
  const route = useRoute();

  return (
    <View>
      <Text>Module {route.params.module}</Text>
    </View>
  );
};

export default ModuleScreen;
