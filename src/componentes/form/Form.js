import React from "react";
import { useState } from "react";
import { View,Text, TextInput,Button } from "react-native";
import ResultIMC from "../resultIMC/ResultIMC";
function Form(){
    const [height,setHeight]= useState(null)
    const [weight, setWeight]= useState(null)
    const [messageIMC,setMessageIMC]= useState("Preencha o peso e altura")
    const [imc,setIMC]= useState(null)
    const [textButton,setTextButton]= useState("Calcular")
    function imcCalculator(){
        return setIMC((weight/(height*height)).toFixed(2))
    }
    function validationIMC(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageIMC("Seu imc é igual:")
            setTextButton("Calcular Novamente")
            return
        }
        setIMC(null)
        setTextButton("Calcular")
        setMessageIMC("Preencha o peso e altura")
    }
 
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder=" Ex: 1.75"
                    keyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput onChangeText={setWeight} value={weight}  placeholder=" Ex: 75" keyboardType="numeric"/>
                <Button onPress={ validationIMC} title={textButton}/>
            </View>
            <ResultIMC messageResultIMC={messageIMC} resultIMC={imc}/>
        </View>
    )
}
export default Form