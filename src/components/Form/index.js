import {React, useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc/index";
import styles from "./style";

export default function Form() {

const [heigth, setHeigth] = useState(null)
const [weigth, setWeigth] = useState(null)
const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")

function imcCalculator() {
    return setImc((weigth / (heigth * heigth)).toFixed(2))
}

function imcValidation(){
    if(weigth != null && heigth != null) {
        imcCalculator()
        setHeigth(null)
        setWeigth(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular novamente")

        return
    }

    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e a altura")
}

return (
    <View style={ styles.formContext }>
        <View style={ styles.form }>
            <Text style={ styles.formLabel }>Altura</Text>

            <TextInput 
                placeholder="Ex. 1.75" keyboardType="numeric" 
                onChangeText={ setHeigth } value={ heigth }
                style={ styles.input }
                
            />
            
            <Text style={ styles.formLabel }>Peso</Text>

            <TextInput 
                placeholder="Ex. 54.123" keyboardType="numeric" 
                onChangeText={ setWeigth } value={ weigth }
                style={ styles.input }
            />

            <TouchableOpacity onPress={ () => imcValidation() } style={ styles.buttonCalculator }>
                <Text style={ styles.textButtonCalculator }> {textButton} </Text>
            </TouchableOpacity>

            <ResultImc messageResultImc={ messageImc } resultImc={ imc } />
        </View>
    </View>
);

}