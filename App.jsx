// import React, { useState } from 'react';
// import { SafeAreaView,View,  Text, TouchableOpacity, StyleSheet, Image,Alert } from 'react-native';


// export default function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>🚀 React Native Test Interface</Text>
//       <Text style={styles.counter}>Count: {count}</Text>
//       <Image
//         style={{ width: 200, height: 200 }}
//         source={{
//           uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYqoKTu_o3Zns2yExbst2Co84Gpc2Q1RJbA&s"



//         }} />
//       {/* Increase Button */}
//       {/* //instead of TouchableOpacity use pressable */}
//       <TouchableOpacity style={styles.incbtn} onPress={() => setCount(count + 1)}>
//         <Text style={styles.btnText}>Increase</Text>
//       </TouchableOpacity>

//       {/* Reset Button */}
//       <TouchableOpacity style={styles.resetbtn} onPress={() => {setCount(0);Alert.alert("counter reset to zero")}}>
//         <Text style={styles.btnText}>Reset</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
// // use stylesheet for styling as it onl loads once when we load the app not on evry render
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     margin: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#c7ababff',
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#de1313',
//   },
//   counter: {
//     fontSize: 18,
//     marginVertical: 10,
//     color: '#fff',
//   },
//   incbtn: {
//     backgroundColor: '#b73434',///in css we use kabab-case but in react native we use camelCase
//     borderRadius: 8,
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     marginVertical: 5,
//     width: 150,
//   },
//   resetbtn: {
//     backgroundColor: '#3333cc',
//     borderRadius: 8,
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     marginVertical: 5,
//     width: 150,
//   },
//   btnText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     fontSize: 16,
//   },
// });
// //if we want to use scrolling feature we can use scrollview but it is not good for performance if we have large data for large data we use flatlist or sectionlist

// //in react native we dont have div span h1 h2 etc we have view text etc

// //in react native we dont have css we use stylesheet or inline styling

// //in react native we dont have class we use style

// //in react native we dont have px we use number only

// //in react native we dont have margin shorthand we have to use marginTop marginBottom marginLeft marginRight

// //in react native we dont have flexbox we have to use flexDirection justifyContent alignItems etc

// //in react native we dont have position relative absolute we have to use position absolute relative etc

// //in react native we dont have z-index we have to use elevation for android and zIndex for ios

// //in react native we dont have box-shadow we have to use shadowColor shadowOffset shadowOpacity shadowRadius for ios and elevation for android

// //in react native we dont have text-align we have to use textAlign

// //in react native we dont have font-weight we have to use fontWeight

// //in react native we dont have font-size we have to use fontSize

// //in react native we dont have background-color we have to use backgroundColor

// //in react native we dont have border-radius we have to use borderRadius
// //is onclick and onpress same event in react native? onclick is for web and onpress is for react native but both are used for handle event like button click etc  

// stack navigator and tab navigator are used for navigation in react native in stack navigator we can navigate to different scrrens and in tab navigator we can navigate to differnet tabs in the buttoms of the screeen
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (value) => {
    setSubmittedName(value); // Save entered name
  };

  return (
    <SafeAreaView>
      <Text style={styles.text}> My first App</Text>

      <TextInput
        placeholder="Enter your name"
        style={{
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "black",
          margin: 20,
          padding: 10
        }}
        onChangeText={(val) => setText(val)}
        value={text}
      />

      <Button title="Submit" onPress={() => handleSubmit(text)} />

      {submittedName ? (
        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 18 }}>Your name is {submittedName}</Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    padding: 6,
    color: "yellow",
    fontSize: 20,
    backgroundColor: "black",
    textAlign: "center",
  },
});
