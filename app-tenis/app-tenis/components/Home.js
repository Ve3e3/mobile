import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function Home(){
  return(
  <SafeAreaView style={estilo.container}>
  <Text style={estilo.titulo}> Tênis </Text>
  <Text style={estilo.subtitulo}> Nike - classe e estilo </Text>
  <Text style={estilo.subtitulo}> Adidas - classe e estilo </Text>
  <Text style={estilo.subtitulo}> Misuno - classe e estilo </Text>
  </SafeAreaView>
)}

const estilo = StyleSheet.create({
container: {
    flex: 1,
},
titulo:{
  fontSize:25
},
subtitulo:{
   fontSize:20
},
});