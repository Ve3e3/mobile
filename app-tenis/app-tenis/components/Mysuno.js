import {SafeAreaView,View,StyleSheet,Text,FlatList,Image} from 'react-native';

export default function Mysuno() {
  return (
    <SafeAreaView style={estilo.container}>
      <Text style={estilo.titulo}> Os melhores clássicos da Misuno </Text>
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
    titulo: 'Mizuno Wave Rider',
    foto: require('../assets/IMGTMysuno/Wave.jpg'),
    valor: 'R$420,00',
    descricao:
      'O Wave Rider é um dos modelos mais famosos da Mizuno, conhecido por seu excelente desempenho em corrida. Ele combina o sistema de amortecimento Wave, que proporciona uma transição suave e estabilidade durante as corridas, com um design moderno e confortável. É ideal para corredores que buscam conforto e performance.',
  },
  {
    uid: 2,
    titulo: 'Mizuno Wave Sky',
    foto: require('../assets/IMGTMysuno/WaveSky.jpg'),
    valor: 'R$799,00',
    descricao:
      'O Mizuno Wave Sky é um modelo de tênis focado em conforto, sendo ideal para corredores que buscam uma experiência de corrida suave e estável. Ele possui o sistema de amortecimento Mizuno Wave, que oferece uma transição mais suave entre o impacto e a decolagem. O tênis é projetado para corridas de longa distância, proporcionando um bom nível de amortecimento, flexibilidade e estabilidade.',
  },
  {
    uid: 3,
    titulo: 'Mizuno Wave Inspire',
    foto: require('../assets/IMGTMysuno/WaveInspire.jpg'),
    valor: 'R$599,00',
    descricao:
      ' O Mizuno Wave Inspire é um modelo voltado para quem busca estabilidade e controle durante a corrida. Ele é especialmente indicado para corredores com pisada pronada (quando o pé tende a rolar para dentro durante a corrida). O modelo possui a tecnologia Mizuno Wave combinada com a tecnologia U4ic, que proporciona amortecimento leve e responsivo. A estrutura do tênis ajuda a corrigir a trajetória do movimento do pé, garantindo mais controle e conforto.',
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
});
