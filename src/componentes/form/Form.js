import React from "react";
import { View,Text, TextInput,Button } from "react-native";
import ResultIMC from "../resultIMC/ResultIMC";
function Form(){
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder=" Ex: 1.75" keyboardType="numeric"/>
                <Text>Peso</Text>
                <TextInput  placeholder=" Ex: 75" keyboardType="numeric"/>
                <Button title="Calcular"/>
            </View>
            <ResultIMC messageResultIMC={messageIMC} resultIMC={imc}/>
        </View>
    )
}
export default Form