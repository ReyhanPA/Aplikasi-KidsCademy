import { Stack } from "expo-router";

const LeaderboardLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Leaderboard",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default LeaderboardLayout;
