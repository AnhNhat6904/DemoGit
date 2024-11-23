import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const ProductItem = ({ item }) => {
  const handleAddToCart = () => {
    alert(`${item.title} đã được thêm vào giỏ hàng!`);
  };

  return (
    <View style={styles.productItem}>
      <TouchableOpacity onPress={() => console.log(`Clicked on ${item.title}`)}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
      </TouchableOpacity>
      <Text style={styles.productName} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Feather name="shopping-cart" size={18} color="white" />
        <Text style={styles.addToCartText}>Thêm vào giỏ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  productPrice: {
    color: "#FF4500",
    fontWeight: "bold",
  },
  addToCartButton: {
    backgroundColor: "#FF4500",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  addToCartText: {
    color: "white",
    marginLeft: 5,
  },
});

export default ProductItem;