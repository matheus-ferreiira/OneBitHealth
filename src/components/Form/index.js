import {React, useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc/index";

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
    <View>
        <View>
            <Text>Altura</Text>
            <TextInput 
                placeholder="Ex. 1.75" keyboardType="numeric" 
                onChangeText={ setHeigth } value={ heigth }
            />
            
            <Text>Peso</Text>
            <TextInput 
                placeholder="Ex. 54.123" keyboardType="numeric" 
                onChangeText={ setWeigth } value={ weigth }
            />

            <Button 
                title={ textButton } onPress={ () => imcValidation() }
            />

            <ResultImc messageResultImc={ messageImc } resultImc={ imc } />
        </View>
    </View>
);

}