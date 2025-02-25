import {SafeAreaView,View,StyleSheet,Text,FlatList,Image} from 'react-native';

export default function Puma() {
  return (
    <SafeAreaView style={estilo.container}>
      <Text style={estilo.titulo1}> Os melhores clássicos da Puma </Text>
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
    titulo:'Puma Future Rider',
    foto: require('../assets/IMGTPuma/PumaFutureRider.jpg'),
    valor: 'R$499,00',
    descricao:'O Puma Future Rider é um tênis casual inspirado nos modelos clássicos de corrida dos anos 80. Ele combina estilo retrô com tecnologia moderna, oferecendo um visual esportivo e confortável para o dia a dia. O modelo apresenta uma sola com boa tração e amortecimento, garantindo conforto tanto para corridas curtas quanto para o uso diário. Seu design com elementos de cor vibrante também faz dele uma opção de destaque para quem busca estilo e performance.',
  },
  {
    uid: 2,
    titulo:'Puma Velocity Nitro',
    foto: require('../assets/IMGTPuma/PumaVelocityNitro.jpg'),
    valor: 'R$699,00',
    descricao:
      'O Puma Velocity Nitro é projetado para corredores que buscam velocidade e conforto. Ele utiliza a tecnologia Nitro, que oferece amortecimento responsivo e leve, perfeito para quem quer melhorar o desempenho nas corridas. O cabedal é feito com malha respirável, proporcionando boa ventilação durante os treinos. É um modelo que combina performance e conforto, sendo ideal para treinos longos ou corridas rápidas.',
  },
  {
    uid: 3,
    titulo:'Puma RS-X³',
    foto: require('../assets/IMGTPuma/PumaRsx3.jpg'),
    valor: 'R$599,00',
    descricao: 'O Puma RS-X³ é um modelo voltado para quem busca estilo e conforto, mas também é adequado para treinos e uso casual. Com a tecnologia RS (Running System), ele oferece um excelente amortecimento, além de contar com um design futurista e arrojado. A combinação de cores vibrantes e o solado robusto fazem desse modelo um dos mais populares da Puma para quem busca conforto sem abrir mão do estilo moderno.',
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
  titulo2:{
    fontSize: 30,
    textAlign:'left',
    color: "#ftj8h",
    textDecorationColor: 'bold',
    margin: 24,
    paddingleft: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  titulo1:{
    fontSize: 32,
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
