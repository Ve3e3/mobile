import {SafeAreaView, View, StyleSheet, Text,FlatList, Image} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={estilo.container}>
      <Text style={estilo.titulo}> Os melhores clássicos da Nike </Text>
      <FlatList
      data={TnK}
      keyExtractor={(item)=>{item.uid.toString()}}
      renderItem={({item}) => (
      <View style = {estilo.card}>
      <Text style = {estilo.titulo}>{item.titulo}</Text>
      <Image style={estilo.foto} source={item.foto}/>
      <Text style = {estilo.titulo}>{item.valor}</Text>
      <Text style = {estilo.paragraph}>{item.descricao}</Text>
      </View>
  )}
      />
    </SafeAreaView>
  );
}

const TnK = [
  {
    uid: 1,
    titulo: "Nike Air Force 1",
    foto: require('../assets/IMGTNike/AirForce1.jpg'),
    valor: "R$420,00",
    descricao: "Um dos tênis mais icônicos da Nike, lançado em 1982. Conhecido por seu design simples e elegante, o Air Force 1 foi o primeiro tênis de basquete a usar a tecnologia de amortecimento Air. Tornou-se um símbolo de cultura urbana e é amplamente usado tanto para esportes quanto como item de moda.",
    
  },
  {
    uid: 2,
    titulo: "Nike Air Jordan 1",
    foto: require('../assets/IMGTNike/AirJordan1.jpg'),
    valor: "R$850,00",
    descricao: "Lançado em 1985, o Air Jordan 1 foi o primeiro modelo da linha de tênis de Michael Jordan. O design ousado e as cores vibrantes o tornaram uma sensação no mundo do basquete e da moda. Considerado um dos tênis mais influentes da história, seu impacto ainda é sentido hoje.",
  },
  {
    uid: 3,
    titulo: "Nike Dunk",
    foto: require('../assets/IMGTNike/Dunk.jpg'),
    valor: "R$650,00",
    descricao: "Originalmente lançado nos anos 80 como um tênis de basquete, o Nike Dunk passou a ser um símbolo de estilo e cultura de rua, especialmente nas comunidades de skate. Ele é conhecido por seu design simples e colorido, além de sua colaboração com marcas e artistas, tornando-se um item cobiçado no mundo dos sneakers.",
  }
]

const estilo = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d2dadd',
    color:'white',
    paddingTop: 50,
  },
  titulo:{
    fontSize: 35,
    textAlign:'left',
    color: "#ftj8h",
    textDecorationColor: 'bold',
    margin: 24,
    paddingleft: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  paragraph:{
    color: 'black',
    marginTop:5,
    //marginLeft:5,
    padding:15,
    marginBottom: 5,
    fontSize: 23,
    fontFamily:'Robot'
  },
  foto:{
    padding: 15,
    alignItems: 'center',
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 12
  },
  card:{
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset:{ width: 0, height: 2},
    shadowOpacity: 8,
    marginTop: 20,
    padding:50,
     margin: 8,

  },
})