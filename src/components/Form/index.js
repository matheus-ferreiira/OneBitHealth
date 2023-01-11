import React from "react";
import { View, Text, TextInput } from "react-native";

export default function Title() {
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Ex. 1.75" keyboardType="numeric" />
                
                <Text>Peso</Text>
                <TextInput placeholder="Ex. 54.123" keyboardType="numeric" />
            </View>
        </View>
    );
}