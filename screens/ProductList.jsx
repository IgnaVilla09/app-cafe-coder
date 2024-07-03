import { StyleSheet, Text, Image, TouchableOpacity, View, FlatList } from 'react-native';
import arrow from "../assets/arrow.png";
import { useNavigation } from '@react-navigation/native';
import products from "../data/products.json";
import Item from '../components/addons/Item';
import { ShoppingCart } from 'lucide-react-native';


export default function ProductList() {

  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <View style={styles.cartContainerView}>
        <TouchableOpacity style={styles.viewCart} onPress={() => { alert("ACA VES EL CARRITO") }}>
            <ShoppingCart color="white" size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.arrowContainer} onPress={() => { navigation.navigate("Menu") }}>
          <Image style={styles.arrowBack} source={arrow} />
        </TouchableOpacity>
        <Text style={styles.title}>Menú</Text>
      </View>
      <FlatList 
        data={products}
        renderItem={({ item }) => (
          <Item title={item.title} image={item.thumbnail} description={item.description} price={item.price} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      
  </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#EDF1D6",
    position: 'relative',
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 40,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  arrowContainer: {
    position: 'absolute',
    left: 15,
    top: 50,
  },
  arrowBack: {
    width: 30,
    height: 30,
    transform: [{ rotate: '90deg' }],
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  cartContainerView: {
    position: 'absolute',
    zIndex: 50,
    top: 20,
    right: 0,
    alignItems: 'center',
  },
  viewCart: {
    backgroundColor: '#14AE5C',
    padding: 15,
    borderRadius: 10,
    margin: 15,
  }
});
