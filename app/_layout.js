import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="(tabs)"
        options={{
          title: "KidsCademy",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default StackLayout;
