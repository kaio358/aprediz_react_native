import React from "react";
import { View,Text } from "react-native";
import styles from "./Titulo.module.js"
function Titulo(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>ONEBITHEALTH</Text>
        </View>
    )
}
export default Titulo