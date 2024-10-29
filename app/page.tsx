"use client";
import SplashScreen from "@/screens/SplashScreen";
import HomeScreen from "@/screens/HomeScreen";
import Signup from "@/screens/Signup";

export default function Home() {
  return (
    <>
      <Signup />
      <HomeScreen />
      <SplashScreen />
    </>
  );
}
