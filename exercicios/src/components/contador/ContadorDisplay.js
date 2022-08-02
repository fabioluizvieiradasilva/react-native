import React, { useState } from "react";
import { Text } from "react-native";
import Estilo from "../estilo";

export default props => {
    const [num, setNum] = useState(0);

    return (
        <>
            <Text style={Estilo.grande}>
                {props.num}
            </Text>
        </>
    )
}