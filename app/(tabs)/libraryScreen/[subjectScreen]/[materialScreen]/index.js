import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, View, Text } from "react-native";
import { useRoute } from '@react-navigation/native';
const MaterialScreen = () => {
  const route = useRoute();
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text className="text-xl font-semibold text-black">Detail {route.params.material}</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
});

export default MaterialScreen;
