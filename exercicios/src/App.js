
import React from "react";
import { Text, View, StyleSheet } from "react-native";

//import ContadorV2 from './components/contador/ContadorV2';
import ListaProdutosV2 from './components/produtos/ListaProdutosV2'

export default () => (
    <View style={style.App}>
        <ListaProdutosV2/>
    </View>
    
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})