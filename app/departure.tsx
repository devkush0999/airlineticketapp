import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function departure() {
  const [searchInput, setSearchInput] = useState("");
  const [autoCompleteResults, setAutoCompleteResults] = useState([]);

  const handleInputChange = (value: string) => {
    setSearchInput(value);
  };
  return (
    <View className="flex-1 items-center bg-[#F5F7FA]">
      <View className="w-full h-full">
        <View
          className="border mb-4 justify-start w-full bg-[#192031] relative pt-16 pb-8"
          style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
        >
          <View className="flex-row gap-4 justify-start items-center px-2">
            <Pressable
              className="flex-row items-center justify-center h-14 w-[20%] bg-red-400 rounded-xl"
              onPress={() => router.back()}
            >
              <View className="rounded-full bg-gray-500 h-10 w-10 justify-center items-center">
                <MaterialIcons
                  name="keyboard-arrow-left"
                  size={24}
                  color="white"
                />
              </View>
            </Pressable>
            <View className=" w-[60%] justify-center items-center flow-row">
              <Text className="text-white text-xl font-extrabold">
                Select Departure{" "}
              </Text>
            </View>
            <View>
              <View>
                <MaterialCommunityIcons
                  name="dots-horizontal"
                  size={30}
                  color="white"
                />
              </View>
            </View>
          </View>
        </View>

        {/* ===================================== Airport  or city  search ======================================== */}
        <View className="w-full py-4 px-4 relative">
          <View className="flex-row justify-between items-center bg-white border-2 border-gray-400 rounded-xl h-14 overflow-hidden">
            <View className="w-full h-full justify-center">
              <TextInput
                placeholder="Search for airport or city"
                placeholderTextColor={"gray"}
                value={searchInput}
                onChangeText={handleInputChange}
                className="bg-transparent text-gray-600 h-full px-2 capitalize"
              />
            </View>
          </View>
        </View>
        {/* ===================================== AutoComplete Results ======================================== */}
        {autoCompleteResults.length > 0 && (
          <View className="border-2 border-gray-400 bg-white rounded-xl shadow-sm mt-4">
            <FlatList
              data={autoCompleteResults}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => {}}
                  className="px-2 py-2 rounded-xl my-1"
                >
                  <Text className="text-gray-500 capitalize">
                    {item.name}({item.iatacode})
                  </Text>
                </Pressable>
              )}
            />
          </View>
        )}
      </View>
    </View>
  );
}
