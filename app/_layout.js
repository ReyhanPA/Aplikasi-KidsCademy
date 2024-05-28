import { Stack } from "expo-router";
import AuthProvider from "../contexts/AuthProvider";

const StackLayout = () => {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(tabs)"
          options={{
            title: "KidsCademy",
            headerShown: false,
          }}
        />
      </Stack>
    </AuthProvider>
  );
};

export default StackLayout;
