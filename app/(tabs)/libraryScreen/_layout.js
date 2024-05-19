import { Stack } from "expo-router";

const LibraryLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Library",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default LibraryLayout;
