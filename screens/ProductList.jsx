import { StyleSheet, Text, Image, TouchableOpacity, View, FlatList } from 'react-native';
import arrow from "../assets/arrow.png";
import products from "../data/products.json";
import Item from '../components/addons/Item';

export default function ProductList() {
  return (
    <View style={styles.body}>
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowContainer} onPress={() => { alert("FUNCIONA") }}>
        <Image style={styles.arrowBack} source={arrow} />
      </TouchableOpacity>
      <Text style={styles.title}>Menú</Text>
    </View>
    <FlatList 
      data={products}
      renderItem={({ item }) => (
        <Item title={item.title} image={item.thumbnail}/>
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
});
