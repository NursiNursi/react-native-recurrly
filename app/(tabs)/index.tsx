import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/Onboarding"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go To Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go To Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go To Sign Up
      </Link>

      <Link href="/subscriptions/spotify">Spotify Subscription</Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
      >
        Claude Max Subscription
      </Link>
    </SafeAreaView>
  );
}

