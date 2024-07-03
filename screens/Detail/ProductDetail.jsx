import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import arrow from "../../assets/arrow.png";
import { useNavigation } from '@react-navigation/native';
// import products from "../../data/products.json";

export default function ProductList({route}) {

    const { title, image, description, price } = route.params; 

    const navigation = useNavigation();


    const quantity = 2;
    const subPrice = price * quantity;

  return (
    <View style={styles.body}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.arrowContainer} onPress={() => { navigation.goBack() }}>
                <Image style={styles.arrowBack} source={arrow} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.ImageContainer}>
            <Image source={{uri: image}} style={styles.imageproduct}></Image>
        </View>

        <View style={styles.quantityContainer}>
            <Text style={styles.subtitleContainer}>Unidades</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
                <Text>{quantity}</Text>
                {quantity <=  0 ? (<TouchableOpacity style={styles.buttonDisabled}>
                    <Text style={styles.textButton}>-</Text>
                </TouchableOpacity>) : <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>-</Text>
                </TouchableOpacity> }
            </View>
        </View>
        
        <View style={styles.separate}></View>

        <View style={styles.descriptionContainer}>
            <Text style={styles.labelDescrip}>Descripción:</Text>
            <Text style={styles.textDescrip}>{description}</Text>
            <View style={styles.separate}></View>
            <Text style={styles.textDescrip}>${price}</Text>
        </View>

        <View style={styles.boxBuy}>
            <TouchableOpacity style={styles.buttonBuy}>
                <Text style={styles.textBuy}>Añadir al carrito</Text>
            </TouchableOpacity>
            {subPrice > 0 ? (<Text style={styles.subprice}>Subtotal: ${subPrice}</Text>) : null }
        </View>
  </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#EDF1D6",
    position: "relative",
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
  ImageContainer: {
    paddingTop: 50,
  },
  imageproduct: {
    width: 250,
    height: 280,
    marginLeft: "22%"
  },
  descriptionContainer: {
    paddingHorizontal: 30,
  },
  separate: {
    width: 380,
    alignSelf: 'center',
    height: 2,
    marginVertical: 10,
    backgroundColor: "#000000",
    opacity: 0.4,
  },
  textDescrip: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  labelDescrip: {
    fontSize: 17,
    fontWeight: '300',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 30
  },
  subtitleContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 30,
    gap: 20,
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    width: 50,
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.1,
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  boxBuy: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: "row-reverse",
    alignItems: 'center',
    gap: 20
  },
  subprice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#14AE5C",
  },
  buttonBuy: {
    width: 110,
    height: 60,
    backgroundColor: "#14AE5C",
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBuy: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#fff",
    textAlign: 'center',
  },
});
