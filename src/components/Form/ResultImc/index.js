import React from "react";
import { View, Text, Share, TouchableOpacity } from "react-native";
import styles from "./style";

export default function ResultImc(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc hoje é:" + props.resultImc
        })
    }

    return (
        <View style={styles.resultImc}>
            <View>
                {props.resultImc != null ?
                    <TouchableOpacity>
                        <Text>Share</Text>
                    </TouchableOpacity>
                    :
                    <View />
                }
            </View>
            <Text style={styles.information}> {props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </View>
    );
}