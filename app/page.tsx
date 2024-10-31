"use client";
import SplashScreen from "@/screens/SplashScreen";
import HomeScreen from "@/screens/HomeScreen";
import Signup from "@/screens/Signup";
import Login from "@/screens/Login";
import ForgotPassword from "@/screens/ForgotPassword";
import EmailVerification from "@/screens/EmailVerification";
import PasswordReset from "@/screens/PasswordReset";
import ProfileCreation from "@/screens/ProfileCreation";
import RandomScreen from "@/screens/RandomScreen";
import HomePage from "@/screens/HomePage";

export default function Home() {
  return (
    <>
      <HomePage />
      <RandomScreen />
      <ProfileCreation />
      <PasswordReset />
      <EmailVerification />
      <ForgotPassword />
      <Login />
      <Signup />
      <HomeScreen />
      <SplashScreen />
    </>
  );
}
