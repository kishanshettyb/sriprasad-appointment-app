import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { router } from "expo-router";
import { useFonts } from "expo-font";
const slides = [
	{
		key: 1,
		title: "Discover Divine Guidance",
		text: "Your Path to Solutions with Sri Prasad Guruji. Streamline your journey to tranquility, wisdom, and spiritual growth. Book appointments effortlessly and connect with renowned guidance worldwide",
		image: require("../../assets/banners/Banner-1.png")
	},
	{
		key: 2,
		title: "Enlightenment at Your Fingertips",
		text: "Ease Your Spiritual Journey. Book sessions with Guruji effortlessly. Explore personalised experiences for holistic nourishment, all on our user-friendly app.",
		image: require("../../assets/banners/Banner-2.png")
	},
	{
		key: 3,
		title: "Spiritual Guidance Made Simple",
		text: "Seamlessly Connect with Spiritual Guides. Easily schedule appointments, join virtual sessions, and grow spiritually. Experience deeper connections and transformative journeys effortlessly.",
		image: require("../../assets/banners/Banner-3.png")
	}
];

const Slider = () => {
	const [showRealApp, setShowRealApp] = useState(false);
	const [fontsLoaded, fontError] = useFonts({
		"Lora-BoldItalic": require("../../assets/fonts/Lora-BoldItalic.ttf")
	});
	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			console.log("fontsLoaded");
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		return null;
	}

	const _renderItem = ({ item }) => {
		return (
			<ImageBackground source={item.image} className="relative flex-1 h-100" onLayout={onLayoutRootView}>
				<View className="flex items-center justify-center w-100 mt-[100]">
					<Image source={require("../../assets/icon.png")} className="w-[150] h-[150]" />
				</View>
				<View className="flex justify-center m-auto mt-[30] z-10 relative rounded-2xl items-center w-[380] h-[120] bg-[#00000094] ">
					<Text className="z-20 mb-2 text-2xl font-bold text-white opacity-100" style={{ fontFamily: "Lora-BoldItalic", fontSize: 30 }}>
						Sri Prasad Guruji
					</Text>
					<Text className="text-lg font-bold text-white opacity-80">I And You Being Together Foundation</Text>
				</View>
				<View className="flex justify-end flex-1 px-[20] align-bottom mb-[130]">
					<Text className="mb-3 text-2xl font-bold text-white">{item.title}</Text>
					<Text className="font-bold text-white opacity-75 text-md">{item.text}</Text>
				</View>
			</ImageBackground>
		);
	};

	const _onDone = () => {
		// User finished the introduction. Show real app through
		// navigation or simply by controlling state
		return router.replace("../signup");
	};

	if (showRealApp) {
		console.log(showRealApp);
	} else {
		return <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} showPrevButton={true} prevLabel="Prev" />;
	}
};

export default Slider;
