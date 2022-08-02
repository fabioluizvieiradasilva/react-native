import React, { useState } from "react";
import { Button, Text } from "react-native";


export default props => {
    const [numero, setNumero] = useState(props.incial);

    const inc = () => setNumero(numero + props.passo)
    const dec = () => setNumero(numero - props.passo)
    return(
        <>
            <Text>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </>
    )
}