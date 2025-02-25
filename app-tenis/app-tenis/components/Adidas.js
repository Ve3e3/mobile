import {SafeAreaView,View,StyleSheet,Text,FlatList,Image} from 'react-native';

export default function Mysuno() {
  return (
    <SafeAreaView style={estilo.container}>
      <Text style={estilo.titulo}> Os melhores clássicos da Adidas </Text>
      <FlatList
        data={tnK}
        keyExtractor={(item) => {
          item.uid.toString();
        }}
        renderItem={({ item }) => (
          <View style={estilo.card}>
            <Text style={estilo.titulo2}>{item.titulo}</Text>
            <Image style={estilo.foto} source={item.foto} />
            <Text style={estilo.titulo2}>{item.valor}</Text>
            <Text style={estilo.paragraph}>{item.descricao}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const tnK = [
  {
    uid: 1,
    titulo: 'Adidas Ultraboost',
    foto: require('../assets/IMGTAdidas/AdidasUltraboost.jpg'),
    valor: 'R$899,00',
    descricao:
      'O Ultraboost é um dos modelos mais renomados da Adidas, famoso por seu conforto extremo e estilo moderno. Ele é projetado com a tecnologia Boost no solado, que oferece excelente retorno de energia e amortecimento. A parte superior do tênis é feita com o material Primeknit, que se ajusta bem ao pé, proporcionando conforto e flexibilidade durante a corrida ou caminhada. O Ultraboost é ideal para quem busca um tênis de alta performance para longas distâncias, com um visual esportivo e elegante.',
  },
  {
    uid: 2,
    titulo: 'Adidas Solar Glide',
    foto: require('../assets/IMGTAdidas/AdidasSolarGlide.jpg'),
    valor: 'R$699,00',
    descricao:
      'O Solar Glide é um tênis da Adidas voltado para a performance, focado em longas distâncias. Ele utiliza a tecnologia Boost no solado, que oferece um amortecimento confortável e responsivo, ideal para corredores que buscam estabilidade e conforto por longos períodos. O cabedal é feito com material Engineered Mesh, proporcionando respirabilidade e suporte ao pé durante as corridas.',
  },
  {
    uid: 3,
    titulo: 'Adidas Adizero Adios Pro',
    foto: require('../assets/IMGTAdidas/AdidasAdiosPro.jpg'),
    valor: 'R$1.399,00',
    descricao:
      'O Adizero Adios Pro é um dos tênis mais rápidos e leves da Adidas, desenvolvido para corredores de elite e maratonistas. Ele possui a tecnologia Lightstrike para amortecimento leve e responsivo, e uma estrutura que proporciona máxima performance. O design do Adios Pro é focado em proporcionar uma sensação de velocidade, sendo extremamente leve, sem perder o suporte necessário para corridas de alto nível. É um modelo voltado para quem busca performance e velocidade nas corridas.',
  }
];

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d2dadd',
    color: 'white',
    paddingTop: 50,
  },
  titulo:{
    fontSize: 30,
    textAlign:'left',
    color: "#ftj8h",
    textDecorationColor: 'bold',
    margin: 24,
    paddingleft: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  titulo2:{
    fontSize: 35,
    textAlign:'left',
    color: "#ftj8h",
    textDecorationColor: 'bold',
    margin: 24,
    paddingleft: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  paragraph: {
    color: 'black',
    marginTop: 5,
    padding: 15,
    marginBottom: 5,
    fontSize: 23,
    fontFamily: 'Robot',
  },
  foto: {
    padding: 15,
    alignItems: 'center',
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 8,
    marginTop: 20,
    padding: 50,
    margin: 8,
  },
});
