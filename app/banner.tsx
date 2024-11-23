import React, { useState, useEffect, useRef } from "react";
import { View, Animated, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const opacityAnim = useRef(new Animated.Value(1)).current; // Initialize opacity

  const images = [
    require("../assets/images/banner01.jpg"),
    require("../assets/images/banner02.jpg"),
    require("../assets/images/banner03.jpg"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate opacity out
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        // Update the current image index
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        // Animate opacity back in
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [opacityAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={images[currentImage]}
        style={[
          styles.image,
          { opacity: opacityAnim }, // Apply animated opacity
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400, // Banner height
    width: width * 0.9, // Slightly smaller than screen width
    alignSelf: "center", // Center the banner
    overflow: "hidden",
    marginVertical: 20, // Top and bottom margin
  },
  image: {
    width: "100%", // Full width
    height: "100%", // Full height
    resizeMode: "cover", // Maintain aspect ratio while covering
  },
});

export default Banner;
