import React from "react";
import { FlatList, Text } from "react-native";
import estilo from "../estilo";
import produtos from "./produtos";

export default props => {
    return(
        <>
            <Text style={estilo.grande}>
                Lista de Produtos
            </Text>

            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={({item}) => {
                    return <Text>{item.id} {item.nome} - Preço R$ {item.preco}</Text>
                }}
            
            />

          

        </>
    )
}