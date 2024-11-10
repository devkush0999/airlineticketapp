import Header from "@/components/Header";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import { Image, StyleSheet, Platform, View, Text } from "react-native";

export default function HomeScreen() {
  const [isPending, setIsPending] = useState(false);
  return (
    <View className="flex-1 border items-center bg-[#F5FF7FA] relative">
      <StatusBar style="light" />
      {isPending && (
        <View className="absolute z-50 w-full h-full justify-center items-center">
          <View className="bg-[#000000] bg-opacity-50 h-full w-full justify-center items-center opacity-[0.45]">
            <ActivityIndicator size="large" color="#fff" />
          </View>
        </View>
      )}
      <View
        className="border  h-64 mb-4 justify-start w-full bg-[#192031] relative pt-16"
        style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      >
        <Header />
      </View>
    </View>
  );
}
