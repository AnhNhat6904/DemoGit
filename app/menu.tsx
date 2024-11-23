import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      const data = await response.json();
      const transformedData = data.map((category: string) => ({
        name: category.charAt(0).toUpperCase() + category.slice(1),
      }));

      setCategories(transformedData);
      setLoading(false);
    } catch (err) {
      setError("Không thể tải danh mục.");
      setLoading(false);
    }
  };

  const handleCategoryPress = (category: string) => {
    navigation.navigate("productCategoryScreen", { category });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleCategoryPress(item.name)} style={styles.categoryButton}>
            <Text style={styles.menuTitle}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorContainer: {
    padding: 20,
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  categoryButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    textAlign: "center",
    backgroundColor: "#f8f9fa",
    marginBottom: 5,
  },
});

export default Menu;