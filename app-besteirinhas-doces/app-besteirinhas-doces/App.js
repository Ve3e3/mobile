import {SafeAreaView, View, StyleSheet, Text, FlatList, Image, ScrollView} from 'react-native';

export default function App(){
  return(
    <SafeAreaView style = {styles.container}>
    <Text style = {styles.titulo}> MILKSHACKE´S DO BALACO-BACO </Text>

    <ScrollView>
         <Text style = {styles.tt2}> Sabores que temos!!! </Text>
    <FlatList 
    data={DadosSabores}
    renderItem={({item})=>
    <View> 
      
      <Text style = {styles.ts}> ------------------ </Text>
      <Text style = {styles.tt3}> {item.sabor} </Text>
      <Text style = {styles.sabores}> {item.descricao} </Text>
      <Image style = {styles.img} source = {item.imagem} />
      <Text style = {styles.tt4}>  {item.valor}</Text>
    </View>
    }

    />
    </ScrollView>
    </SafeAreaView>
  );
}

const DadosSabores = [
  {sabor:'Shake de Morango',tt:'     ', descricao:'Sabor doce e refrescante, com a suavidade das frutas frescas, perfeito para quem ama um toque doce e natural.', imagem: require('./assets/MKSM.jfif'),valor:'R$15,00',},
  {sabor:'Shake de Oreo', descricao:'Uma combinação irresistível de biscoito crocante e creme suave, trazendo um sabor equilibrado de doce e levemente amargo.',imagem: require('./assets/MKSOREO.png'),valor:'R$17,00',},
  {sabor:'Shake de Ovomaltine', descricao:'Uma mistura deliciosa de malte e chocolate, criando uma explosão de sabor crocante e cremoso a cada mordida.', imagem: require('./assets/MKSOV.jfif'),valor:'R$21,00',},
  {sabor:'Shake de Chocolate', descricao:'Sabor rico e indulgente, com a cremosidade do cacau e aquele toque de doçura irresistível, clássico e atemporal.', imagem: require('./assets/MKSCHOCO.jfif'),valor:'R$15,00',},
  {sabor:'Shake de Baunilha', descricao:'Sabor delicado e aromático, com um toque doce e suave que combina perfeitamente com qualquer sobremesa.', imagem: require('./assets/MKSBaun.jpg'),valor:'R$16,00',},
]

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    backgroundColor: '#fde8bd',
    borderBlockColor:'30',
    marginBottom:30,
  },
  titulo: {
    height: 130,
    fontSize:45,
    marginTop:15,
    padding: 5,
    justifyContent:'center',
    textAlign:'center',
     backgroundColor:'#0891a2',
     borderRadius: 50
},
  ts:{
    margin:-10,
    fontSize:50
},
  tt2:{
    height: 130,
    fontSize:45,
    marginTop:15,
    padding: 5,
    justifyContent:'center',
    textAlign:'center',
     backgroundColor:'#d79e57',
     borderRadius: 50
},
  tt3:{
    height: 70,
    fontSize:45,
    marginTop:15,
    padding: 5,
    justifyContent:'center',
    textAlign:'center',
     backgroundColor:'#4a9e8d',
     borderRadius: 50
  },
  tt4:{
    height: 70,
    fontSize:45,
    marginTop:15,
    padding: 5,
    justifyContent:'center',
    textAlign:'center',
     backgroundColor:'#d79e57',
     borderRadius: 50
  },
  sabores: {
    fontSize:30,
     padding: 5,
    textAlign:'center',
    margin:20,
    backgroundColor:'#60240a',
    borderRadius: 50
},
img:{
  marginLeft: 50,
  height: 300,
  width: 300
}
})