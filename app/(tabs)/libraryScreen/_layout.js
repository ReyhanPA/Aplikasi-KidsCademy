import { Stack } from "expo-router";

const LibraryLayout = () => {
  return (
    <Stack>
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
