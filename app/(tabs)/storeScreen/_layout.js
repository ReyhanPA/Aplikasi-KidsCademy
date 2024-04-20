import { Stack } from "expo-router";

const StoreLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Store",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default StoreLayout;
