import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ item }) => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      const data = await response.json();
      const transformedData = data.map((category) => ({
        name: category.charAt(0).toUpperCase() + category.slice(1),
      }));
      setCategories(transformedData);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  const handleSearchChange = (text) => {
    setSearchText(text);
    if (text) {
      const filtered = categories.filter((category) =>
        category.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories([]);
    }
  };

  const handleCategoryPress = (category) => {
    setSearchText(category.name);
    setFilteredCategories([]);
    navigation.navigate("productCategoryScreen", { category: category.name });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity style={styles.logoContainer} onPress={() => navigation.navigate("home")}>
          <Image source={require("../assets/images/logo4.png")} style={styles.logo} />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm..."
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={handleSearchChange}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Conditional Rendering for Category Suggestions */}
      {searchText.length > 0 && filteredCategories.length > 0 && (
        <View style={styles.suggestionsContainer}>
          <FlatList
            data={filteredCategories}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.suggestionItem}
                onPress={() => handleCategoryPress(item)}
              >
                <Text style={styles.suggestionText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {/* Bottom Row */}
      <View style={styles.bottomRow}>
        <View style={styles.authButtons}>
          <TouchableOpacity onPress={() => navigation.navigate("index")}>
            <Text style={styles.authButtonText}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
          <Text style={styles.separator}>|</Text>
          <TouchableOpacity onPress={() => navigation.navigate("register")}>
            <Text style={styles.authButtonText}>ĐĂNG KÝ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconButtons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="chatbubble-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("cart", { product: item })}>
            <Ionicons name="cart-outline" size={24} color="black" />
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>1</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  suggestionsContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 5,
    marginTop: 5,
    paddingHorizontal: 10,
    position: "absolute",
    top: 70, // Adjust to be below the search bar
    left: 10,
    right: 10,
    zIndex: 1,
  },
  suggestionItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  suggestionText: {
    fontSize: 14,
    color: "#333",
  },
  container: {
    backgroundColor: "white",
    padding: 5, // Reduced padding
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5, // Reduced margin
  },
  logoContainer: {
    marginRight: 5, // Reduced margin
  },
  logo: {
    width: 150,         // Adjusted width for a shorter header
    height: 80,         // Adjusted height for a shorter header
    resizeMode: "contain",
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 20,
    overflow: "hidden",
    height: 30, // Reduced height for a shorter header
  },
  searchInput: {
    flex: 1,
    fontSize: 14, // Reduced font size
    paddingHorizontal: 10, // Reduced padding
  },
  searchButton: {
    width: 30, // Adjusted width for a shorter header
    justifyContent: "center",
    alignItems: "center",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  authButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  authButtonText: {
    fontWeight: "bold",
    fontSize: 12, // Reduced font size
    color: "#333",
  },
  separator: {
    marginHorizontal: 3, // Reduced margin
    color: "#999",
    fontSize: 12, // Reduced font size
  },
  iconButtons: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 10, // Reduced margin
  },
  cartBadge: {
    position: "absolute",
    right: -6,
    top: -6,
    backgroundColor: "red",
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "white",
    fontSize: 10, // Reduced font size
    fontWeight: "bold",
  },
});

export default Header;
