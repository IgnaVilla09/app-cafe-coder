import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import arrow from "../../assets/arrow.png"

export default function Item({ title, image }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.list}>
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={styles.title}>{title}</Text>
        <Image source={arrow} style={styles.iconArrow} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 10,
    marginVertical: 2,
    elevation: 20,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
    objectFit: "contain",
    borderRadius: 5,
  },
  iconArrow: {
    width: 30,
    height: 30,
    marginLeft: 10,
    transform: [{ rotate: '270deg' }],
  },
});
