import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // For additional icons like Zalo

const Footer = () => {
  const handleFacebookPress = () => {
    console.log("Facebook icon pressed");
    Linking.openURL('https://www.facebook.com/nhatnho.04');
  };
  

  const handleInstagramPress = () => {
    console.log("Instagram icon pressed");
  };

  const handleTwitterPress = () => {
    console.log("Twitter icon pressed");
  };

  const handleZaloPress = () => {
    console.log("Zalo icon pressed");
  };

  const handleYouTubePress = () => {
    console.log("YouTube icon pressed");
  };

  return (

    
    <View style={styles.container}>
      {/* Display the logo image */}
      <Image
        source={require("../assets/images/1.jpg")} // Adjust path as necessary
        style={styles.logo}
      />

      <Text style={styles.linkText}>KẾT NỐI VỚI NHW</Text>

      <View style={styles.iconContainer}>
      <View style={styles.iconWrapper}>
    <TouchableOpacity onPress={handleFacebookPress}>
      <Icon name="facebook" size={30} color="#0a48c9" />
    </TouchableOpacity>
    <Text style={styles.iconCaption}>Facebook</Text>
  </View>

        <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={handleInstagramPress}>
            <Icon name="instagram" size={30} color="#eb002f" />
          </TouchableOpacity>
          <Text style={styles.iconCaption}>Instagram</Text>
        </View>

        <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={handleZaloPress}>
            <MaterialIcons name="chat" size={30} color="#4A90E2" /> {/* Change to the actual Zalo icon if available */}
          </TouchableOpacity>
          <Text style={styles.iconCaption}>Zalo</Text>
        </View>

        <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={handleYouTubePress}>
            <Icon name="youtube" size={30} color="#FF0000" />
          </TouchableOpacity>
          <Text style={styles.iconCaption}>YouTube</Text>
        </View>
      </View>

      {/* Caption below icons */}
      <Text style={styles.captionText}>VPGD: Số 19 Cao Văn Lầu, Phường Hoài Hương, Huyện Hoài Nhơn, Tỉnh Bình Định - Email: contact@nhathuynhwatch.vn</Text>
      <Text style={styles.captionText}>Giấy CNĐKKD và MSDN số: 0104938104 đăng ký lần đầu do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp ngày 07/10/2004</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    padding: 20,
    alignItems: "center",
  },
  logo: {
    width: 400,  // Adjust as needed for your design
    height: 300,
    marginBottom: 10, // Space between logo and other footer elements
  },
  iconContainer: {
    flexDirection: "row",
    marginBottom: 30,
    marginTop: 15,
    justifyContent: "center", // Center the icons horizontally
  },
  iconWrapper: {
    alignItems: "center", // Center icons and captions
    marginHorizontal: 15, // Space between icon wrappers
  },
  iconCaption: {
    color: "white",
    fontSize: 12,
    marginTop: 5, // Space between icon and caption
  },
  linkText: {
    color: "yellow",
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 5,
    alignSelf: "flex-start", // Aligns the text to the left within the container
  },
  captionText: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
  },
});

export default Footer;
