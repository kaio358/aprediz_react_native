
import React from "react";
import { StyleSheet, View } from 'react-native';
import Titulo from "./src/componentes/titulo/Titulo";
import Main from "./src/componentes/main/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
});
