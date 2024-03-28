import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Pressable, TextInput} from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import ShoppingItem from './component/ShoppingItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/*Heading*/}
          <Text style={styles.heading}>Shopping items</Text>
        {/*no of items*/}
          <Text style={styles.noOfItem}>3</Text>
        {/*Delete all*/}
        <Pressable>
          <MaterialIcons name="delete" size={30} color="black" />
        </Pressable>
      </View>
      <ShoppingItem />
      <ShoppingItem />
      <ShoppingItem />

      {/*Text Input area*/}
      <TextInput 
      placeholder="Add shopping Item"
      style={styles.input}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    marginBottom: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "500",
    flex: 1,
  },
  noOfItem: {
    fontSize: 30,
    fontWeight: "500",
    marginRight: 20,
  },
  input:
  {
    backgroundColor: "lightgray",
    padding: 10,
    fontSize: 17,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: "auto",
    marginBottom: "5%",
  }
});
